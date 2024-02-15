<?php
include("../../PHP/conexion.php");

$opciones = isset($_GET['opciones']) ? explode(',', $_GET['opciones']) : array();

// Inicializar la consulta como un string vacío
$consultaSQL = '';

// Verificar si 'todo' está en las opciones
if (in_array('todo', $opciones)) {
    // Si 'todo' está presente, no importa el resto de las opciones, seleccionar todo
    $consultaSQL = "SELECT * FROM catering UNION ALL SELECT * FROM bailes";
} else {
    // Si 'todo' no está presente, construir la consulta según las opciones seleccionadas
    if (in_array('catering', $opciones)) {
        $consultaSQL .= "SELECT * FROM catering ";
    }

    if (in_array('bailes', $opciones)) {
        // Si ya hay una parte de la consulta, agregar UNION ALL antes de la segunda parte
        if ($consultaSQL !== '') {
            $consultaSQL .= "UNION ALL ";
        }
        $consultaSQL .= "SELECT * FROM bailes ";
    }
}

try {
    // Si la consulta no está vacía, ejecutarla
    if ($consultaSQL !== '') {
        $consulta = $conexion->prepare($consultaSQL);
        $consulta->execute();
        $resul_consulta = $consulta->fetchAll(PDO::FETCH_ASSOC);

        foreach ($resul_consulta as $resultado) {
            echo "<div style='border: 1px solid #ccc; padding: 10px; margin: 10px; max-width: 100px;'>";
            echo "<p>Compañía: {$resultado['compañia']}</p>";
            echo "<p>Precio: {$resultado['precio_hora']} euros</p>";
            echo "</div>";
        }
    } else {
        // Si la consulta está vacía, no hay opciones seleccionadas
        echo "<p>No se seleccionaron opciones.</p>";
    }
} catch (PDOException $e) {
    die("Error al ejecutar la consulta: " . $e->getMessage());
}
?>
