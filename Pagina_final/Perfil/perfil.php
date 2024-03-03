<?php
include("../PHP/conexion.php");

$sql = "SELECT * FROM usuarios WHERE ID = 1";
$result = $conexion->query($sql);

if ($result->rowCount() > 0) {
    $row = $result->fetch();

    $dni = $row['DNI'];
    $nombre = $row['nombre'];
    $apellido = $row['apellido'];
    $fecha_nacimiento = $row['fecha_nacimiento'];
    $correo = $row['correo'];
    $telefono = $row['telefono'];
    $foto = $row['fotografia'];
} else {
    echo "No se encontraron resultados.";
}

?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="../Icon/favicon.ico">
    <title>Formulario</title>
    <link rel="stylesheet" href="css/style.css">
    <style>
        .profile-picture {
            border-radius: 50%;
            width: 175px;
            height: 175px;
        }
    </style>
</head>

<body>
<div class="wrapper">
    <h1>Perfil</h1>
    <div class="wrapper1">
    <form method="post">
        <div>
            <!-- <label for="profile-picture">Foto de perfil:</label> -->
            <img src="<?php echo $foto; ?>" alt="Profile Picture" class="profile-picture">
        </div>

        <div class="input-box">
            <label for="dni">DNI:</label>
            <input type="text" id="dni" disabled value="<?php echo $dni ?>">
        </div>

        <div class="input-box">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" value="<?php echo $nombre; ?>">
        </div>

        <div class="input-box">
            <label for="apellido">Apellido:</label>
            <input type="text" id="apellido" value="<?php echo $apellido; ?>">
        </div>

        <div class="input-box">
            <label for="email">Email:</label>
            <input type="date" id="fecha" name="fecha" value="<?php echo $fecha_nacimiento; ?>" max="<?php echo date('Y-m-d', strtotime('-18 years')); ?>">
        </div>

        <div class="input-box">
            <label for="email">Email:</label>
            <input type="email" id="email" value="<?php echo $correo; ?>">
        </div>
    </form>
    </div>
</div>
</body>

</html>