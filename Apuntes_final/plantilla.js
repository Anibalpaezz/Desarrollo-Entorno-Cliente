document.addEventListener("DOMContentLoaded", function () {
    // Función para realizar la petición AJAX
    function hacerPeticion() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // Manejar los datos recibidos
                var datos = JSON.parse(this.responseText);
                console.log(datos);
                // Puedes realizar operaciones con los datos aquí
            }
        };
        xhr.open("GET", "server.php?accion=obtenerDatos", true);
        xhr.send();
    }

    // Llamar a la función al cargar la página
    hacerPeticion();
});

var xhr = new XMLHttpRequest();
var url = "preguntas.php";
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            var datos = JSON.parse(xhr.responseText);
            resolve(datos);
        } else {
            reject(xhr.statusText);
        }
    }
};

// Aquí defines tu variable que deseas enviar
var variableAEnviar = "valor";

// Envías la variable directamente en el cuerpo de la solicitud
xhr.send(variableAEnviar);
