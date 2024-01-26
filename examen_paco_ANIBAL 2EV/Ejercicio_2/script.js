function cargarSelect() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("contselect").innerHTML =
                xhr.responseText;

            asignarFunciones();
        }
    };

    xhr.open("GET", "select.txt", true);
    xhr.send();
}

function asignarFunciones() {
    document.getElementById("marca2").onchange = actualizarBotones;

    actualizarBotones();
}

function subirElemento() {
    var select = document.getElementById("marca2");
    var seleccionado = select.options[select.selectedIndex];

    if (seleccionado && seleccionado.previousElementSibling) {
        select.insertBefore(
            seleccionado,
            seleccionado.previousElementSibling
        );
        actualizarBotones();
    }
}

function bajarElemento() {
    var select = document.getElementById("marca2");
    var seleccionado = select.options[select.selectedIndex];

    if (seleccionado && seleccionado.nextElementSibling) {
        select.insertBefore(
            seleccionado.nextElementSibling,
            seleccionado
        );
        actualizarBotones();
    }
}

function actualizarBotones() {
    var select = document.getElementById("marca2");
    var seleccionado = select.options[select.selectedIndex];

    document.querySelector("button:nth-of-type(1)").disabled =
        !seleccionado || !seleccionado.previousElementSibling;

    document.querySelector("button:nth-of-type(2)").disabled =
        !seleccionado || !seleccionado.nextElementSibling;
}

window.onload = cargarSelect;