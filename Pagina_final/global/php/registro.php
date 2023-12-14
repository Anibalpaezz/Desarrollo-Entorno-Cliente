<?php
    $servidor = "192.168.3.182";
    $usuario = "anibal";
    $contraseña = "1234";
    $bd = "test";

    $conex = new mysqli($servidor, $usuario, $contraseña, $bd);

    if ($conex -> connect_error) {
        die("Error al conectarse". $conex -> connect_error);
    }

    $datos = json_decode(file_get_contents('php://input'), true);
    $contraseña = $datos['contraseña'];
    $dni = $datos['dni'];
    $nombre = $datos['nombre'];
    $apellido = $datos['apellido'];
    $email = $datos['email'];
    $telefono = $datos['telefono'];
    $fecha_nacimiento = $datos['nacimiento'];

    $sql = "SELECT * FROM usuarios WHERE dni = ?";
    $stmt = $conex -> prepare($sql);
    $stmt->bind_param("1", $dni);

    if ($stmt->execute()) {
        $resultado = $stmt->get_result();
        if ($resultado->num_rows > 0) {
            echo "Existe";
        } else {
            $insertar = 'INSERT INTO usuarios VALUES ($nombre, $dni, $apellido, $email, $telefono, $nacimiento, $contraseña)';
            $stmt = $conex -> prepare($insertar);
            if ($stmt->execute()) {
                echo "realizado con exito";
            } else {
                echo "error en insert" . $conex -> error;
            }

            $stmt->close();
            $conex->close();
        }

    }
    

?>