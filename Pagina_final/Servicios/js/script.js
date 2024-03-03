document.addEventListener("DOMContentLoaded", function () {
    const checkbox1 = document.getElementById("opcion1");
    const checkbox2 = document.getElementById("opcion2");
    const checkbox3 = document.getElementById("opcion3");
    const datosDerecha = document.getElementById("datosDerecha");

    if (checkbox1 && checkbox2 && checkbox3) {
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

            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    datosDerecha.innerHTML = xhr.responseText;
                }
            };

            const parametros = "opciones=" + opciones.join(",");
            xhr.open("GET", "php/filtro.php?" + parametros, true);
            xhr.send();

            checkbox1.addEventListener("change", actualizarContenido);
            checkbox2.addEventListener("change", actualizarContenido);
            checkbox3.addEventListener("change", actualizarContenido);
        }

        actualizarContenido();
    } else {
        console.error("No se encontraron algunos elementos con ID especificado.");
    }

    document.addEventListener("click", function (event) {
        if (event.target && event.target.matches(".comprar-button")) {
            const companyId = event.target.dataset.companyId;
            const selectedOptions = obtenerOpcionesSeleccionadas(); // Add a function to get selected options

            const xhrUpdate = new XMLHttpRequest();
            xhrUpdate.onreadystatechange = function () {
                if (xhrUpdate.readyState === 4 && xhrUpdate.status === 200) {
                    actualizarContenido(selectedOptions);
                }
            };
            xhrUpdate.open("GET", `php/mod_disponibilidad.php?id=${companyId}&opciones=${selectedOptions}`, true);
            xhrUpdate.send();
        }
    });

    function obtenerOpcionesSeleccionadas() {
        const opcionesSeleccionadas = [];

        if (checkbox1.checked) {
            opcionesSeleccionadas.push("catering");
        }

        if (checkbox2.checked) {
            opcionesSeleccionadas.push("bailes");
        }

        return opcionesSeleccionadas.join(",");
    }

});
