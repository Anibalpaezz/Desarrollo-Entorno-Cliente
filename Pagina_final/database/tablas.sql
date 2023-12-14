CREATE DATABASE paco_party;
USE paco_party;

CREATE TABLE usuarios (
    DNI VARCHAR(10) PRIMARY KEY,
    Nombre VARCHAR(20),
    Apellidos VARCHAR(40),
    Fecha_nacimiento DATE,
    Email VARCHAR(50),
    Contraseña VARCHAR(6),
    Telefono VARCHAR(10),
    Puntos INT(5),
    Fotografia VARCHAR(50)
)ENGINE=InnoDB;

CREATE TABLE entretenimiento()ENGINE=InnoDB;
CREATE TABLE coches()ENGINE=InnoDB;
CREATE TABLE entretenimiento()ENGINE=InnoDB;
