document.getElementById('generarTabla').addEventListener('click', function () {
    const numRows = parseInt(prompt('Ingrese el número de filas para la tabla:'));
    const numCols = parseInt(prompt('Ingrese el número de columnas para la tabla:'));

    if (isNaN(numRows) || isNaN(numCols) || numRows < 1 || numCols < 1) {
        alert('Por favor, ingrese un número válido de filas y columnas.');
        return;
    }

    // Generate the table with custom data
    const tableHTML = generateTable(numRows, numCols);
    RESULTADOSDIV.innerHTML = tableHTML;
});

function generateTable(rows, cols) {
    let tableHTML = '<h3>Tabla resultado:</h3>';
    tableHTML += '<table class="table table-bordered">';
    tableHTML += '<thead><tr>';

    // Generate table headers based on the number of columns
    for (let j = 1; j <= cols; j++) {
        tableHTML += `<th>Dato ${j}</th>`;
    }

    tableHTML += '</tr></thead>';
    tableHTML += '<tbody>';

    // Generate rows and columns with input fields for custom data
    for (let i = 1; i <= rows; i++) {
        tableHTML += '<tr>';

        for (let j = 1; j <= cols; j++) {
            tableHTML += `<td><input type="text" placeholder="Dato ${j}"></td>`;
        }

        tableHTML += '</tr>';
    }

    tableHTML += '</tbody></table>';
    return tableHTML;
}
