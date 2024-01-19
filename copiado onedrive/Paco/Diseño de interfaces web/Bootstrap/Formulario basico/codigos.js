function alerta() {
    // Get the values of the form fields and display them in an alert
    var nombre = document.getElementById("input_name").value;
    var apellidos = document.getElementById("input_surname").value;
    var fechaNacimiento = document.getElementById("input_surname").value;
    var email = document.getElementById("example_input_mail").value;
    var contrasena1 = document.getElementById("contraseña1").value;
    var contrasena2 = document.getElementById("contraseña2").value;
    var provincia = document.getElementsByName("Provincia")[0].value;
    var ciudad = document.getElementsByName("Ciudad")[0].value;
    var codigoPostal = document.getElementsByName("Codigo_postal")[0].value;
    var direccion1 = document.getElementById("example_input_mail").value;
    var vivienda = document.getElementById("inputState").value;
    var direccion2 = document.getElementById("example_input_mail").value;

    // Display the values in an alert
    var alerta = "Nombre: " + nombre + "\n" +
        "Apellidos: " + apellidos + "\n" +
        "Fecha de nacimiento: " + fechaNacimiento + "\n" +
        "Email: " + email + "\n" +
        "Contraseña 1: " + contrasena1 + "\n" +
        "Contraseña 2: " + contrasena2 + "\n" +
        "Provincia: " + provincia + "\n" +
        "Ciudad: " + ciudad + "\n" +
        "Código Postal: " + codigoPostal + "\n" +
        "Dirección 1: " + direccion1 + "\n" +
        "Tipo de vivienda: " + vivienda + "\n" +
        "Dirección 2: " + direccion2;

    alert(alerta);
}

function texto() {
    // Get the values of the form fields and display them in an alert
    var nombre = document.getElementById("input_name").value;
    var apellidos = document.getElementById("input_surname").value;
    var fechaNacimiento = document.getElementById("input_surname").value;
    var email = document.getElementById("example_input_mail").value;
    var contrasena1 = document.getElementById("contraseña1").value;
    var contrasena2 = document.getElementById("contraseña2").value;
    var provincia = document.getElementsByName("Provincia")[0].value;
    var ciudad = document.getElementsByName("Ciudad")[0].value;
    var codigoPostal = document.getElementsByName("Codigo_postal")[0].value;
    var direccion1 = document.getElementById("example_input_mail").value;
    var vivienda = document.getElementById("inputState").value;
    var direccion2 = document.getElementById("example_input_mail").value;

    var texto = "Nombre: " + nombre + "\n" +
        "Apellidos: " + apellidos + "\n" +
        "Fecha de nacimiento: " + fechaNacimiento + "\n" +
        "Email: " + email + "\n" +
        "Contraseña 1: " + contrasena1 + "\n" +
        "Contraseña 2: " + contrasena2 + "\n" +
        "Provincia: " + provincia + "\n" +
        "Ciudad: " + ciudad + "\n" +
        "Código Postal: " + codigoPostal + "\n" +
        "Dirección 1: " + direccion1 + "\n" +
        "Tipo de vivienda: " + vivienda + "\n" +
        "Dirección 2: " + direccion2;

    document.write(texto);
}