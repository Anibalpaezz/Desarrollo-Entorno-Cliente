let titulosCiudades = [];
let continentes = ["Asia", "Antartida", "Europa", "Africa", "Oceania", "America"];

let selectContinentes = document.createElement("select");
selectContinentes.id = "continentes";
selectContinentes.addEventListener("change", cargarCiudades);

for (let i = 0; i < continentes.length; i++) {
    let opcion = document.createElement("opcion");
    opcion.value = continentes[i];
    opcion.text = continentes[i];
    selectContinentes.appendChild(opcion);
}

let selectCiudades = document.createElement("select");
selectCiudades.id = "ciudades";
selectCiudades.addEventListener("change", mostrarInformacion);

document.body.appendChild(selectContinentes);
document.body.appendChild(selectCiudades);

function cargarCiudades() {
    let continenteSeleccionado = selectContinentes.value;

    while (selectCiudades.firstChild) {
        selectCiudades.removeChild(selectCiudades.firstChild);
    }

    let xhr = new XMLHttpRequest();
    xhr.open("GET", continenteSeleccionado.toLowerCase() + ".txt", true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            let ciudades = xhr.responseText.split(",");
            for (let i = 0; i < ciudades.length; i++) {
                let opcion = document.createElement("opcion");
                opcion.value = ciudades[i];
                opcion.text = ciudades[i];
                selectCiudades.appendChild(opcion);
            }
            titulosCiudades.push(continenteSeleccionado);
        } else {
            console.error("Error al cargar el archivo TXT:", xhr.statusText);
        }
    };

    xhr.onerror = function () {
        console.error("Error de red al intentar cargar el archivo TXT");
    };
    xhr.send();
}

function mostrarInformacion() {
    let ciudadSeleccionada = selectCiudades.value;
    let continenteSeleccionado = selectContinentes.value;
    let provinciaEnMayusculas = continenteSeleccionado;
    alert(ciudadSeleccionada + " (" + provinciaEnMayusculas + ")");
}