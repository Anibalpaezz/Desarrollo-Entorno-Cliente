function realizarConsulta() {
    var nombre = document.getElementById('nombre').value.trim();
    var apellido = document.getElementById('apellido').value.trim();
    var fechaNacimiento = document.getElementById('fechaNacimiento').value.trim();

    if (nombre.length < 3 && apellido.length < 3 && fechaNacimiento.length < 3) {
        alert('Debes introducir al menos tres caracteres en algún campo.');
        return;
    }

    var consulta = "SELECT * FROM usuarios WHERE ";

    if (nombre.length < 3 && apellido.length < 3 && fechaNacimiento.length < 3) {
        alert('Debes introducir al menos tres caracteres en algún campo.');
        return;
    }

    var consulta = "SELECT * FROM usuarios WHERE ";

    if (nombre.length > 0) {
        consulta += "nombre LIKE '%" + nombre + "%'";
    }

    if (apellido.length > 0) {
        if (consulta.length > "SELECT * FROM usuarios WHERE ".length) {
            consulta += " AND ";
        }
        consulta += "apellido LIKE '%" + apellido + "%'";
    }

    if (fechaNacimiento.length > 0) {
        if (consulta.length > "SELECT * FROM usuarios WHERE ".length) {
            consulta += " AND ";
        }
        consulta += "fecha_nacimiento LIKE '%" + fechaNacimiento + "%'";
    }

    alert(consulta);

    var xhr = new XMLHttpRequest();

    xhr.open('POST', 'server.php', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
        }
    };

    xhr.send(JSON.stringify({ consulta: consulta }));

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var tabla = document.getElementById('resultadosTabla');
            tabla.getElementsByTagName('tbody')[0].innerHTML = '';

            var resultados = JSON.parse(xhr.responseText);

            resultados.forEach(function (usuario) {
                var fila = tabla.insertRow();

                var celdaNombre = fila.insertCell(0);
                celdaNombre.innerHTML = usuario.dni;

                var celdaNombre = fila.insertCell(1);
                celdaNombre.innerHTML = usuario.nombre;

                var celdaApellido = fila.insertCell(2);
                celdaApellido.innerHTML = usuario.apellido;

                var celdaFechaNacimiento = fila.insertCell(3);
                celdaFechaNacimiento.innerHTML = usuario.fecha_Nacimiento;

            });
        }
    };
}

