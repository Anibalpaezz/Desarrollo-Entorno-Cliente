document.addEventListener("DOMContentLoaded", function () {
    // Obtener referencia a los checkboxes y al contenedor de datos
    const checkbox1 = document.getElementById("opcion1");
    const checkbox2 = document.getElementById("opcion2");
    const checkbox3 = document.getElementById("opcion3");
    const datosDerecha = document.getElementById("datosDerecha");

    // Verificar si los elementos existen antes de agregar eventos
    if (checkbox1 && checkbox2 && checkbox3) {
        // Función para hacer la solicitud AJAX al filtro.php
        function actualizarContenido() {
            const opciones = [];

        if (checkbox1.checked) {
            opciones.push("catering");
        }

        if (checkbox2.checked) {
            opciones.push("bailes");
        }

        if (checkbox3.checked) {
            opciones.push("todo");
        }

        // Realizar la solicitud AJAX
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Actualizar el contenido con la respuesta del servidor
                datosDerecha.innerHTML = xhr.responseText;
            }
        };

        const parametros = "opciones=" + opciones.join(",");
        xhr.open("GET", "php/filtro.php?" + parametros, true);
        xhr.send();

            // Asignar el evento change a los checkboxes
            checkbox1.addEventListener("change", actualizarContenido);
            checkbox2.addEventListener("change", actualizarContenido);
            checkbox3.addEventListener("change", actualizarContenido);
        }

        // Cargar el contenido inicial al cargar la página
        actualizarContenido();
    } else {
        console.error("No se encontraron algunos elementos con ID especificado.");
    }
});
