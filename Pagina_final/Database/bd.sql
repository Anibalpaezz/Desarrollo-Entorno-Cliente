DROP DATABASE IF EXISTS pacoparty;
CREATE DATABASE pacoparty CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE pacoparty;

DROP TABLE IF EXISTS usuario;
CREATE TABLE usuarios (
    DNI VARCHAR(10) primary key,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    fecha_nacimiento date,
    correo VARCHAR(255) unique,
    pass VARCHAR(50) not null,
    telefono VARCHAR(15) unique,
    direccion VARCHAR(100) default null,
    codigo_postal VARCHAR(10),
    fotografia VARCHAR(100),
    puntos INT default 0,
    permisos BOOLEAN default false,
    fecha_registro timestamp default current_timestamp,
    IP VARCHAR(45)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO usuarios (DNI, nombre, pass, permisos, correo, fecha_nacimiento, direccion, codigo_postal, IP)
VALUES ("12345678D", 'anibal', '123456', 1, 'anibal@anibal.com', '1990-01-15', 'Calle Principal 123', '12345', '192.168.1.1');

INSERT INTO usuarios (DNI, nombre, pass, permisos, correo, fecha_nacimiento, direccion, codigo_postal, IP)
VALUES ("14527896J", 'nico', '123456', 0, 'nico@nico.com', '1985-05-20', 'Avenida Principal 456', '54321', '192.168.1.2');


USE pacoparty;
DROP TABLE IF EXISTS coches;

CREATE TABLE coches (
    ID INT auto_increment primary key,
    categoria VARCHAR(50),
    matricula VARCHAR(10) unique,
    marca VARCHAR(30),
    modelo VARCHAR(50),
    precio_hora double,
    plazas TINYINT,
    opciones VARCHAR(75),
    disponibilidad BOOLEAN
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO coches (categoria, matricula, marca, modelo, precio_hora, plazas, opciones, disponibilidad) VALUES
('Histórico', 'PQR678', 'Bentley', 'Type R', 35.0, 4, 'Flores y decoración', true),
('Histórico', 'STU901', 'Rolls-Royce', 'Silver Cloud', 40.0, 4, 'Flores y decoración', true);
INSERT INTO coches (categoria, matricula, marca, modelo, precio_hora, plazas, opciones, disponibilidad) VALUES
('Histórico', 'ABC123', 'Ford', 'Model T', 20.0, 2, 'Flores y decoración', true),
('Histórico', 'DEF456', 'Volkswagen', 'Beetle', 18.0, 4, 'Flores y decoración', true),
('Histórico', 'GHI789', 'Fiat', '500', 15.0, 4, 'Flores y decoración', true),
('Histórico', 'JKL012', 'Chevrolet', 'Bel Air', 25.0, 6, 'Flores y decoración', true),
('Histórico', 'MNO345', 'Mercedes-Benz', '300 SL', 30.0, 2, 'Flores y decoración', true);

CREATE TABLE servicios (
    ID INT auto_increment primary key,
    categoria VARCHAR(50),
    estilo VARCHAR(50) unique,
    compañia VARCHAR(50),
    es_grupo BOOLEAN,
    precio_hora double,
    opciones VARCHAR(75),
    disponibilidad BOOLEAN
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO servicios (categoria, estilo, compañia, es_grupo, precio_hora, opciones, disponibilidad) VALUES
('Grupo de baile', 'Salsa', 'SalsaManía', true, 50.0, 'Coreografía personalizada', true),
('Cantante', 'Jazz', 'Jazzy Vocals', false, 75.0, 'Repertorio clásico de jazz', true),
('Grupo de música', 'Rock', 'Rock&Roll Band', true, 100.0, 'Amplificación incluida', true),
('Entretenimiento', 'Magia', 'Magic Moments', false, 120.0, 'Ilusiones espectaculares', true),
('Grupo de baile', 'Hip-hop', 'Hip-Hop Crew', true, 60.0, 'Street dance', true);
INSERT INTO servicios (categoria, estilo, compañia, es_grupo, precio_hora, opciones, disponibilidad) VALUES
('Cantante', 'Pop', 'PopStar Entertainment', false, 90.0, 'Éxitos actuales y clásicos', true),
('Grupo de música', 'Folk', 'Folk Fusion', true, 80.0, 'Instrumentos acústicos', true),
('Entretenimiento', 'Malabarismo', 'Juggling Masters', false, 110.0, 'Espectáculo de fuego', true),
('Grupo de baile', 'Tango', 'Tango Passion', true, 70.0, 'Baile sensual', true),
('Cantante', 'R&B', 'Rhythm&Blues Diva', false, 100.0, 'Repertorio soul y R&B', true);

CREATE TABLE facturas (
    ID INT auto_increment primary key,
    coche_id INT,
    servicio_id INT,
    FOREIGN KEY (coche_id) REFERENCES coches(ID),
    FOREIGN KEY (servicio_id) REFERENCES servicios(ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
