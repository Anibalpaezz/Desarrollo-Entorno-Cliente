document.addEventListener("DOMContentLoaded", function () {
    // Cargar opciones del select
    var selectorArchivo = document.getElementById("selectorArchivo");
    var opcionesArchivos = ["Botones.txt", "Check.txt", "Radio.txt", "Select.txt"];
    for (var i = 0; i < opcionesArchivos.length; i++) {
        var opcion = document.createElement("option");
        opcion.value = opcionesArchivos[i];
        opcion.text = opcionesArchivos[i];
        selectorArchivo.add(opcion);
    }
});

function generarCodigo() {
    var codigoUsuario = document.getElementById("codigoUsuario").value;
    document.getElementById("resultado").innerHTML = codigoUsuario;
    activarDesactivarBotonGuardar(codigoUsuario);
}

function cargarArchivo() {
    var selectorArchivo = document.getElementById("selectorArchivo");
    var archivoSeleccionado = selectorArchivo.options[selectorArchivo.selectedIndex].value;

    var contenidoArchivo = "Contenido del archivo seleccionado...";

    document.getElementById("codigoUsuario").value = contenidoArchivo;
    document.getElementById("resultado").innerHTML = contenidoArchivo;
    activarDesactivarBotonGuardar(contenidoArchivo);
}

function activarDesactivarBotonGuardar(codigo) {
    var btnGuardar = document.getElementById("btnGuardar");
    btnGuardar.disabled = codigo.trim() === "";
}

function guardarEnBaseDeDatos() {
    var codigoUsuario = document.getElementById("codigoUsuario").value;

    alert("Enviando el código al servidor: " + codigoUsuario);
}
