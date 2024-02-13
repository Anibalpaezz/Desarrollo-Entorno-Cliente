<?php
include("../../PHP/conexion.php");

try {
    $consulta = $conexion->query("SELECT * FROM coches");
    $resul_consulta = $consulta->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($resul_consulta);
} catch (PDOException $e) {
    die("Error al conectar: " . $e->getMessage());
}
?>
