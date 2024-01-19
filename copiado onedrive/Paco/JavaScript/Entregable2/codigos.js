document.getElementById("insertar-datos").addEventListener("click", function() {
    const nfilas = parseInt(document.getElementById("nfilas").value);
    const ncolumnas = parseInt(document.getElementById("ncolumnas").value);

    if (nfilas >=1 && ncolumnas >=1) {
        mostrar(nfilas, ncolumnas);
    } else {
        alert("Introduce un numero valido de filas y columnas");
    }
});

function mostrar(nfilas, ncolumnas) {
    const tabla = document.getElementById("tabla");

    tabla.innerHTML = "";

    const table = document.createElement("table");
    table.border = "1";

    for (let index = 0; index < nfilas; index++) {
        const fila = document.createElement("tr");
        for (let index = 0; index < ncolumnas; index++) {
            const celda = document.createElement("tr");
            celda.textContent = `Row ${i + 1}, Col ${j + 1}`;
            .appendChild(celda);
        }
        table.appendChild(fila);
        
    }

}


let filas = new Array(nfilas);
let columnas = new Array(ncolumnas);

console.log(nfilas);
console.log(ncolumnas);


