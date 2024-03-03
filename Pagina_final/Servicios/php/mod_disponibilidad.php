<?php
include("../../PHP/conexion.php");

if (isset($_GET['id']) && isset($_GET['opciones'])) {
    $companyId = $_GET['id'];
    $selectedOptions = explode(',', $_GET['opciones']);

    try {
        $tableName = "";
        if (in_array('catering', $selectedOptions)) {
            $tableName = "catering";
        } elseif (in_array('bailes', $selectedOptions)) {
            $tableName = "bailes";
        }

        if ($tableName !== '') {
            $updateQuery = "UPDATE $tableName SET disponibilidad = false WHERE ID = :companyId";
            $updateStatement = $conexion->prepare($updateQuery);
            $updateStatement->bindParam(":companyId", $companyId, PDO::PARAM_INT);
            $updateStatement->execute();

            echo "Update successful";
        } else {
            echo "No valid table selected";
        }
    } catch (PDOException $e) {
        echo "Error updating disponibilidad: " . $e->getMessage();
    }
} else {
    echo "Invalid parameters";
}
