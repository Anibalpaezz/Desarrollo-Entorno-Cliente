<?php
// Incluye el archivo de conexión
include 'conex.php';

try {
    // Obtén la conexión
    $conexion = Conexion::obtenerConexion();

    // Consulta de ejemplo
    $consulta = "SELECT * FROM usuarios";
    $resultado = $conexion->query($consulta);

    // Verificar si la consulta fue exitosa
    if ($resultado !== false) {
        // Iterar sobre los resultados (si los hay)
        foreach ($resultado as $fila) {
            // Hacer algo con cada fila
            print_r($fila);
        }
    } else {
        // Manejar el caso de error en la consulta
        echo "Error en la consulta: " . $conexion->errorInfo()[2];
    }
} catch (PDOException $e) {
    // Manejar errores de conexión
    die("Error al ejecutar el script: " . $e->getMessage());
} finally {
    // Cerrar la conexión al finalizar, independientemente de si hubo un error o no
    $conexion = null;
}
?>
