<?php
$host = 'localhost';
$dbname = 'pacofiesta';
$username = 'anibal';
$password = 'nico';

$data = json_decode(file_get_contents('php://input'), true);
$consulta = $data['consulta'];

try {
    $conexion = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conexion->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

    $stmt = $conexion->prepare($consulta);

    $stmt->execute();

    $resultados = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($resultados);
} catch (PDOException $e) {
    echo json_encode(array('error' => 'Error al ejecutar la consulta: ' . $e->getMessage()));
} finally {
    $conexion = null;
}
