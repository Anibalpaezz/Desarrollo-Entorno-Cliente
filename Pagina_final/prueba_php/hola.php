<?php

// Verifica si la solicitud es de tipo POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    // Obtiene los datos JSON del cuerpo de la solicitud
    $datosJSON = file_get_contents('php://input');
    
    // Decodifica los datos JSON
    $datos = json_decode($datosJSON, true);
    
    // Realiza alguna operación con los datos (en este caso, simplemente los devuelve como respuesta)
    echo json_encode($datos);
    
} else {
    // Si la solicitud no es de tipo POST, devuelve un mensaje de error
    echo json_encode(['error' => 'La solicitud debe ser de tipo POST']);
}


