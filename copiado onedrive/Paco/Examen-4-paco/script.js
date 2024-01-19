let tabla = document.getElementById("miTabla");

        function agregarFila() {
            let nuevaFila = tabla.insertRow(tabla.rows.length);
            for (let i = 0; i < 5; i++) {
                let celda = nuevaFila.insertCell(i);
                celda.innerHTML = "Nueva Celda";
            }
            agregarBotonesEdicion(nuevaFila);
        }

        function eliminarFila() {
            if (tabla.rows.length > 1) {
                tabla.deleteRow(tabla.rows.length - 1);
            }
        }

        function agregarBotonesEdicion(fila) {
            let botonEditar = document.createElement("button");
            botonEditar.innerHTML = "Editar";
            botonEditar.onclick = function () {
                habilitarModoEdicion(fila);
            };

            let botonGuardar = document.createElement("button");
            botonGuardar.innerHTML = "Guardar";
            botonGuardar.onclick = function () {
                deshabilitarModoEdicion(fila);
            };
            botonGuardar.style.display = "none";

            let celdaEdicion = fila.insertCell(5);
            celdaEdicion.appendChild(botonEditar);
            celdaEdicion.appendChild(botonGuardar);
        }

        function habilitarModoEdicion(fila) {
            let celdas = fila.cells;
            for (let i = 0; i < celdas.length - 1; i++) {
                let contenido = celdas[i].innerHTML;
                celdas[i].innerHTML = `<input type="text" value="${contenido}">`;
            }
            fila.lastElementChild.firstElementChild.style.display = "none";
            fila.lastElementChild.lastElementChild.style.display = "inline-block";
        }

        function deshabilitarModoEdicion(fila) {
            let celdas = fila.cells;
            for (let i = 0; i < celdas.length - 1; i++) {
                let input = celdas[i].firstElementChild;
                celdas[i].innerHTML = input.value;
            }
            fila.lastElementChild.firstElementChild.style.display = "inline-block";
            fila.lastElementChild.lastElementChild.style.display = "none";
        }





















        document.addEventListener("DOMContentLoaded", function () {
            // Cargar opciones del select
            var fileSelector = document.getElementById("fileSelector");
            var fileOptions = ["Botones.txt", "Check.txt", "Radio.txt", "Select.txt"];
            for (var i = 0; i < fileOptions.length; i++) {
                var option = document.createElement("option");
                option.value = fileOptions[i];
                option.text = fileOptions[i];
                fileSelector.add(option);
            }
        });
        
        function generateCode() {
            var userCode = document.getElementById("userCode").value;
            document.getElementById("result").innerHTML = userCode;
            toggleSaveButton(userCode);
        }
        
        function loadFile() {
            var fileSelector = document.getElementById("fileSelector");
            var selectedFile = fileSelector.options[fileSelector.selectedIndex].value;
        
            // Realizar una solicitud AJAX para cargar el contenido del archivo seleccionado
            // (Puedes usar la función fetch o XMLHttpRequest)
        
            // Simulación:
            var fileContent = "Contenido del archivo seleccionado..."; // Reemplazar con el contenido real
        
            document.getElementById("userCode").value = fileContent;
            document.getElementById("result").innerHTML = fileContent;
            toggleSaveButton(fileContent);
        }
        
        function toggleSaveButton(code) {
            var saveBtn = document.getElementById("saveBtn");
            saveBtn.disabled = code.trim() === "";
        }
        
        function saveToDatabase() {
            var userCode = document.getElementById("userCode").value;
        
            // Realizar una solicitud AJAX para enviar el código al archivo PHP
            // (Puedes usar la función fetch o XMLHttpRequest)
        
            // Simulación:
            alert("Enviando el código al servidor: " + userCode);
        }
        