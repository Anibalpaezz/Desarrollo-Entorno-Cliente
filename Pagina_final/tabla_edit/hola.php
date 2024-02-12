<?php
$host = 'localhost';
$dbname = 'pacoparty';
$username = 'anibal';
$password = 'nico';

try {
    $conexion = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $query = $conexion->query("SELECT nombre, descripcion FROM tu_tabla");
    $data = $query->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($data);
} catch (PDOException $e) {
    die("Error al conectar: " . $e->getMessage());
}
?>