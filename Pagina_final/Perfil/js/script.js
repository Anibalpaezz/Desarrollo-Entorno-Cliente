document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    e.stopPropagation();
});
document.addEventListener('copy', function (e) {
    e.preventDefault();
    e.stopPropagation();
});
document.addEventListener('cut', function (e) {
    e.preventDefault();
    e.stopPropagation();
});

function toogle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
}

function validarEdad() {
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;

    var fechaActual = new Date();

    var fechaNacimientoObj = new Date(fechaNacimiento);

    var diferenciaEnAnios = fechaActual.getFullYear() - fechaNacimientoObj.getFullYear();

    if (diferenciaEnAnios < 18) {
        alert("Debes ser mayor de 18 años.");
        document.getElementById("fechaNacimiento").value = "";
    }
}

