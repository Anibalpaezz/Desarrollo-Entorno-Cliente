<?php
$host = 'localhost';
$dbname = 'pacofiesta';
$username = 'anibal';
$password = 'nico';

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $conn->prepare("SELECT dni, nombre, apellido FROM usuarios");
    $stmt->execute();

    $resultados = $stmt->fetchAll(PDO::FETCH_ASSOC);

    header('Content-Type: application/json');
    echo json_encode($resultados);
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?>
