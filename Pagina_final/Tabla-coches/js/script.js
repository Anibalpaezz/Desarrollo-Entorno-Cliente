function obtenerDatos() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'php/tabla.php', true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            actualizarTabla(data);
        }
    };

    xhr.send();
}

function actualizarTabla(data) {
    const tbody = document.querySelector('#tabla-datos tbody');
    tbody.innerHTML = '';

    data.forEach(row => {
        const tr = document.createElement('tr');
        tr.dataset.id = row.ID;
        tr.innerHTML = `
            <td contenteditable="true" data-field="id">${row.ID}</td>
            <td contenteditable="true" data-field="categoria">${row.categoria}</td>
            <td contenteditable="true" data-field="matricula">${row.matricula}</td>
            <td contenteditable="true" data-field="marca">${row.marca}</td>
            <td contenteditable="true" data-field="modelo">${row.modelo}</td>
            <td contenteditable="true" data-field="precio_hora">${row.precio_hora}</td>
            <td contenteditable="true" data-field="plazas">${row.plazas}</td>
            <td contenteditable="true" data-field="opciones">${row.opciones}</td>`;
        tbody.appendChild(tr);
    });

    tbody.addEventListener('input', manejarEdicionCelda);
}

function manejarEdicionCelda(event) {
    const celda = event.target;
    const campo = celda.getAttribute('data-field');
    const nuevoValor = celda.innerText;
    const idFila = celda.parentNode.dataset.id;

    const datosFila = {
        id: idFila,
        [campo]: nuevoValor
    };
    actualizarDatos(datosFila);
}

function actualizarDatos(datosFila) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'php/update_tabla.php', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                console.log('Datos actualizados exitosamente:', data);
            } else {
                console.error('Error al actualizar datos');
            }
        }
    };

    xhr.send(JSON.stringify(datosFila));
}

document.addEventListener('DOMContentLoaded', () => {
    obtenerDatos();
});