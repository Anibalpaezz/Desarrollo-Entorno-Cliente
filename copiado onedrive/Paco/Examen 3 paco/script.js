document.addEventListener('DOMContentLoaded', function () {
            function añadirFila() {
                var tabla = document.getElementById('tabla');
                var nuevaFila;

                for (var i = 0; i < 1; i++) {
                    nuevaFila = tabla.insertRow(tabla.rows.length);

                    nuevaFila.insertCell(0).innerHTML = 'Fila ' + (tabla.rows.length);
                    nuevaFila.insertCell(1).innerHTML = 'Hola';
                    nuevaFila.insertCell(2).innerHTML = 'Paco';
                    nuevaFila.insertCell(3).innerHTML = "Que tal"


                    nuevaFila.onclick = function () {
                        var filas = tabla.getElementsByTagName('tr');
                        for (var j = 0; j < filas.length; j++) {
                            filas[j].classList.remove('fila-seleccionada');
                        }
                        this.classList.add('fila-seleccionada');
                    };
                }
            }

            function borrarFila() {
                var tabla = document.getElementById('tabla');
                var filas = tabla.getElementsByTagName('tr');

                for (var i = 0; i < filas.length; i++) {
                    if (filas[i].classList.contains('fila-seleccionada')) {
                        filas[i].parentNode.removeChild(filas[i]);
                        break;
                    }
                }
            }

            document.getElementById('añadir').addEventListener('click', añadirFila);
            document.getElementById('borrar').addEventListener('click', borrarFila);
        });