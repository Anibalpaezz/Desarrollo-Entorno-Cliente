function cargarSelect() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("selectContainer").innerHTML =
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
    var selectedOption = select.options[select.selectedIndex];

    if (selectedOption && selectedOption.previousElementSibling) {
        select.insertBefore(
            selectedOption,
            selectedOption.previousElementSibling
        );
        actualizarBotones();
    }
}

function bajarElemento() {
    var select = document.getElementById("marca2");
    var selectedOption = select.options[select.selectedIndex];

    if (selectedOption && selectedOption.nextElementSibling) {
        select.insertBefore(
            selectedOption.nextElementSibling,
            selectedOption
        );
        actualizarBotones();
    } 
}

function actualizarBotones() {
    var select = document.getElementById("marca2");
    var selectedOption = select.options[select.selectedIndex];

    document.querySelector("button:nth-of-type(1)").disabled =
        !selectedOption || !selectedOption.previousElementSibling;

    document.querySelector("button:nth-of-type(2)").disabled =
        !selectedOption || !selectedOption.nextElementSibling;
}

window.onload = cargarSelect;