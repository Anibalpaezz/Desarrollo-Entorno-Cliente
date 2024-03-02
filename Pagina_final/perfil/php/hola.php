<?php
// Verificar si se recibieron datos por POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener datos JSON desde el cuerpo de la solicitud
    $datosJSON = file_get_contents('php://input');

    // Decodificar datos JSON a un array asociativo
    $datos = json_decode($datosJSON, true);

    // Verificar si se recibieron los datos esperados
    if (isset($datos['pulsados']) && isset($datos['valor'])) {
        // Aquí puedes realizar cualquier lógica de procesamiento con los datos recibidos
        // Por ejemplo, podrías realizar una verificación de la sesión

        // Simplemente como ejemplo, vamos a devolver una respuesta
        $respuesta = array('mensaje' => 'Datos recibidos huevo', 'datos' => $datos);
        echo json_encode($respuesta);
    } else {
        // Si no se recibieron los datos esperados, devolver un error
        http_response_code(400);
        echo json_encode(array('error' => 'Datos incompletos o incorrectos'));
    }
} else {
    // Si la solicitud no es POST, devolver un error
    http_response_code(405);
    echo json_encode(array('error' => 'Método no permitido'));
}
?>
