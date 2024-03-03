<?php
include("../../PHP/conexion.php");

if (isset($_GET['opciones'])) {
    $selectedOptions = explode(',', $_GET['opciones']);

    try {
        $tableName = "";
        if (in_array('catering', $selectedOptions)) {
            $tableName = "catering";
        } elseif (in_array('bailes', $selectedOptions)) {
            $tableName = "bailes";
        }

        if ($tableName !== '') {
            $consultaSQL = "SELECT * FROM $tableName";
            $consulta = $conexion->prepare($consultaSQL);
            $consulta->execute();
            $resul_consulta = $consulta->fetchAll(PDO::FETCH_ASSOC);

            foreach ($resul_consulta as $resultado) {
                if ($resultado['disponibilidad'] == 0) {
                    echo "<div class='cajas-datos-agotado'>";
                    echo "<h6>{$resultado['compañia']}</h6>";
                    echo "<p>Precio: {$resultado['precio_hora']} euros</p>";
                    echo "<button type='button' class='comprar-button' data-company-id='{$resultado['ID']}' disabled>Agotado</button>";
                } else {
                    echo "<div class='cajas-datos-disponible'>";
                    echo "<h6>{$resultado['compañia']}</h6>";
                    echo "<p>Precio: {$resultado['precio_hora']} euros</p>";
                    echo "<button type='button' class='comprar-button' data-company-id='{$resultado['ID']}'>Comprar</button>";
                }

                echo "</div>";
            }
        } else {
            echo "<p>No valid table selected</p>";
        }
    } catch (PDOException $e) {
        echo "<p>Error executing query: " . $e->getMessage() . "</p>";
    }
} else {
    echo "<p>Invalid parameters</p>";
}
