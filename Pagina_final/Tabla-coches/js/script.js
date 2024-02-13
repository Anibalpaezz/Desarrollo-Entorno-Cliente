function obtenerDatos() {
    fetch('php/tabla.php')
        .then(response => response.json())
        .then(data => {
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
        });
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
    fetch('php/update_tabla.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosFila)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('La respuesta de red no fue exitosa');
            }
            return response.json();
        })
        .then(data => {
            console.log('Datos actualizados exitosamente:', data);
        })
        .catch(error => {
            console.error('Error al actualizar datos:', error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    obtenerDatos();
});