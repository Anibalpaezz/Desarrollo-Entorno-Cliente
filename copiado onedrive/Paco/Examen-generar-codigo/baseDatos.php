<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $htmlCode = file_get_contents("php://input");

    echo "Código HTML guardado con éxito.";
} else {
    header("HTTP/1.1 403 Forbidden");
    echo "Acceso prohibido.";
}
?>