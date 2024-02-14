<?php
include("../../PHP/conexion.php");

$datos = json_decode(file_get_contents("php://input"), true);

$id = $datos['id'];

$campos_a_actualizar = array();
$valores_a_actualizar = array();

foreach ($datos as $campo => $valor) {
    if ($campo !== 'id') {
        if (!empty($valor)) {
            $campos_a_actualizar[] = $campo . ' = ?';
            $valores_a_actualizar[] = $valor;
        }
    }
}

$valores_a_actualizar[] = $id;

try {
    $consulta = $conexion->prepare("UPDATE coches SET " . implode(', ', $campos_a_actualizar) . " WHERE id = ?");
    $consulta->execute($valores_a_actualizar);

    echo json_encode(array('success' => true));
} catch (PDOException $e) {
    echo json_encode(array('error' => 'Error al actualizar datos: ' . $e->getMessage()));
}
?>