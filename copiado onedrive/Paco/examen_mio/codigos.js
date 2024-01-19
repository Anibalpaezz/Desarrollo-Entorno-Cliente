const celdas = document.querySelectorAll('td');

let ultimaCeldaClickeada = null;

celdas.forEach(celda => {
    celda.addEventListener('click', () => {
        if (celda.style.backgroundColor === 'yellow') {
            return;
        } else if (celda.style.backgroundColor === 'red') {
            celda.style.backgroundColor = 'white';
            reiniciarCeldasCircundantes();
        } else {
            celda.style.backgroundColor = 'red';
            if (ultimaCeldaClickeada) {
                ultimaCeldaClickeada.style.backgroundColor = 'white';
            }
            ultimaCeldaClickeada = celda;
            reiniciarCeldasCircundantes();
            establecerColorCeldasCircundantes('verde');
        }
    });
});

function establecerColorCeldasCircundantes(color) {
    if (ultimaCeldaClickeada) {
        const indiceFila = ultimaCeldaClickeada.parentNode.rowIndex;
        const indiceCelda = ultimaCeldaClickeada.cellIndex;
        const tabla = ultimaCeldaClickeada.parentNode.parentNode;

        const direcciones = [
            { fila: indiceFila - 1, columna: indiceCelda },
            { fila: indiceFila + 1, columna: indiceCelda },
            { fila: indiceFila, columna: indiceCelda - 1 },
            { fila: indiceFila, columna: indiceCelda + 1 },
            { fila: indiceFila - 1, columna: indiceCelda - 1 },
            { fila: indiceFila - 1, columna: indiceCelda + 1 },
            { fila: indiceFila + 1, columna: indiceCelda - 1 },
            { fila: indiceFila + 1, columna: indiceCelda + 1 },
        ];

        for (const direccion of direcciones) {
            const fila = direccion.fila;
            const columna = direccion.columna;

            if (fila >= 0 && fila < tabla.rows.length && columna >= 0 && columna < tabla.rows[fila].cells.length) {
                if (tabla.rows[fila].cells[columna].style.backgroundColor !== 'yellow') {
                    tabla.rows[fila].cells[columna].style.backgroundColor = color;
                }
            }
        }
    }
}

function reiniciarCeldasCircundantes() {
    establecerColorCeldasCircundantes('white');
}
