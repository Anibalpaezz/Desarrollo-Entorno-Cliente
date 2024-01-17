<?php
class Conexion {
    private static $dsn = "mysql:host=localhost;dbname=pacoparty";
    private static $usuario = "anibal";
    private static $contrasena = "nico";

    public static function obtenerConexion() {
        try {
            $conexion = new PDO(self::$dsn, self::$usuario, self::$contrasena);
            $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conexion;
        } catch (PDOException $e) {
            die("Error al conectar: " . $e->getMessage());
        }
    }
}

