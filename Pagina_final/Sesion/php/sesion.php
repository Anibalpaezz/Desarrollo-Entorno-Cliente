<?php
include("../../PHP/conexion.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $datosJSON = file_get_contents('php://input');
        $datos = json_decode($datosJSON, true);

        if (isset($datos['pulsados']) && isset($datos['valor'])) {
            $usuarioDNI = $datos['valor'];
            $pulsados = $datos['pulsados'];

            $consulta = $conexion->prepare("SELECT pass FROM usuarios WHERE DNI = :dni");
            $consulta->execute(array(':dni' => $usuarioDNI));

            $contrasenaBD = $consulta->fetch(PDO::FETCH_ASSOC);

            if (!empty($contrasenaBD)) {
                $numerosComunes = array_intersect(str_split($contrasenaBD['pass']), $pulsados);

                if (!empty($numerosComunes)) {
                    $respuesta = array('mensaje' => 'Contraseña correcta', 'datos' => $datos);
                } else {
                    $respuesta = array('error' => 'Contraseña incorrecta');
                }
            } else {
                $respuesta = array('error' => 'Usuario no encontrado');
            }

            echo json_encode($respuesta);
        } else {
            throw new Exception('Datos incompletos o incorrectos');
        }
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(array('error' => 'Error interno del servidor', 'mensaje' => $e->getMessage()));
    }
} else {
    http_response_code(405);
    echo json_encode(array('error' => 'Método no permitido'));
}
?>
