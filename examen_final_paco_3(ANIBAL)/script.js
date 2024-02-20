const cont_tabla = document.getElementById('cont_tabla');

const busqueda = document.createElement('input');
busqueda.type = 'text';
cont_tabla.appendChild(busqueda);

function datos() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'datos.php', true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const datos = JSON.parse(xhr.responseText);

            tabla(datos);
            func_ordenar();
            buscar(datos);
        }
    };

    xhr.send();
}

function tabla(data) {
    const tabla = document.createElement('table');

    const encabezado = tabla.createTHead();
    const filaEncabezado = encabezado.insertRow();
    for (const key in data[0]) {
        const th = document.createElement('th');

        th.innerHTML = `${key} <img src="volver_verde.png" class="volver_verde" style="display: none;"><img src="volver_rojo.png" class="volver_rojo" style="display: none;">`;
        filaEncabezado.appendChild(th);
    }

    const cuerpo = tabla.createTBody();
    data.forEach(fila => {
        const tr = cuerpo.insertRow();
        for (const key in fila) {
            const td = tr.insertCell();
            td.textContent = fila[key];
        }
    });

    cont_tabla.appendChild(tabla);
}

function func_ordenar() {
    const tabla = cont_tabla.querySelector('table');
    const thead = tabla.querySelector('thead');

    thead.addEventListener('click', function (event) {
        if (event.target.tagName.toLowerCase() === 'th') {
            const columna = event.target.cellIndex;
            ordenar(columna);

            const verde = event.target.querySelector('.volver_verde');
            const rojo = event.target.querySelector('.volver_rojo');

            if (tabla.ascendente) {
                verde.style.display = 'inline-block';
                rojo.style.display = 'none';
            } else {
                verde.style.display = 'none';
                rojo.style.display = 'inline-block';
            }
        }
    });
}

function ordenar(columna) {
    const tabla = cont_tabla.querySelector('table');
    const tbody = tabla.querySelector('tbody');
    const filas = Array.from(tbody.rows);

    const ascendente = !tabla.ascendente;
    const tipoDato = typeof filas[0].cells[columna].textContent;

    filas.sort((a, b) => {
        const valorA = valor(a.cells[columna], tipoDato);
        const valorB = valor(b.cells[columna], tipoDato);

        if (ascendente) {
            return valorA > valorB ? 1 : -1;
        } else {
            return valorA < valorB ? 1 : -1;
        }
    });

    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }

    filas.forEach(fila => tbody.appendChild(fila));
    tabla.ascendente = ascendente;
}

function valor(celda, tipoDato) {
    switch (tipoDato) {
        case 'number':
            return parseFloat(celda.textContent) || 0;
        default:
            return celda.textContent.toLowerCase();
    }
}

function buscar(datos) {
    busqueda.addEventListener('input', function () {
        const filtro = busqueda.value.toLowerCase();

        const filtrados = datos.filter(fila => {
            return Object.values(fila).some(valor => {
                return String(valor).toLowerCase().includes(filtro);
            });
        });

        cont_tabla.removeChild(cont_tabla.querySelector('table'));
        tabla(filtrados);
        func_ordenar();
    });
}

datos();