drop database pacofiesta;
create database pacofiesta;
use pacofiesta;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `catering` (
    `id_cat` int(11) NOT NULL,
    `categoria` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
    `cif_empresa` varchar(10) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
    `nombre_empresa` varchar(40) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
    `menu` varchar(40) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
    `zona` varchar(30) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
    `numero_comensales` int(11) NOT NULL,
    `precio` double NOT NULL,
    `observaciones` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
    `disponibilidad` date NOT NULL,
    `puntos` int(2) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO `catering` (
        `id_cat`,
        `categoria`,
        `cif_empresa`,
        `nombre_empresa`,
        `menu`,
        `zona`,
        `numero_comensales`,
        `precio`,
        `observaciones`,
        `disponibilidad`,
        `puntos`
    )
VALUES (
        3,
        'Bodapaco',
        'ABC123',
        'Catering XYZ',
        'Menú Degustación',
        'Zona A',
        100,
        1500,
        'Sin observaciones',
        '2024-02-14',
        13
    ),
    (
        4,
        'Cumpleaños',
        'DEF456',
        'Eventos ABC',
        'Menú Infantil',
        'Zona B',
        20,
        250.5,
        'Celebración sorpresa',
        '2024-03-22',
        5
    ),
    (
        5,
        'Reunión Corporativa',
        'GHI789',
        'Catering 123',
        'Menú Ejecutivo',
        'Zona C',
        50,
        800.75,
        'Sin restricciones dietéticas',
        '2024-04-10',
        8
    ),
    (
        6,
        'Aniversario',
        'JKL012',
        'Celebraciones VIP',
        'Menú Especial Aniversario',
        'Zona D',
        30,
        450.25,
        'Decoración temática',
        '2024-05-05',
        7
    ),
    (
        7,
        'Graduación',
        'MNO345',
        'Eventos Graduados',
        'Menú Graduación',
        'Zona E',
        80,
        1200.5,
        'Ceremonia al aire libre',
        '2024-06-15',
        9
    ),
    (
        8,
        'Despedida de Solteros',
        'PQR678',
        'Fiestas Locas',
        'Menú Despedida',
        'Zona F',
        15,
        300.75,
        'Juegos y entretenimiento',
        '2024-07-20',
        6
    ),
    (
        14,
        'a',
        '3333',
        'mercadona',
        'big mac',
        'torremolinos',
        3,
        222,
        'me gustan las patatas',
        '2024-02-15',
        333
    );

CREATE TABLE `coches` (
    `id_coches` int(11) NOT NULL,
    `categoria` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
    `matricula` varchar(8) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
    `marca` varchar(20) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
    `modelo` varchar(40) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
    `preciohora` double NOT NULL,
    `nPlazas` tinyint(4) NOT NULL,
    `opciones` varchar(40) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
    `zona` varchar(30) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
    `disponibilidad` date NOT NULL,
    `puntos` int(2) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO `coches` (
        `id_coches`,
        `categoria`,
        `matricula`,
        `marca`,
        `modelo`,
        `preciohora`,
        `nPlazas`,
        `opciones`,
        `zona`,
        `disponibilidad`,
        `puntos`
    )
VALUES (
        1000,
        'categoria',
        '1234-abc',
        'BMW',
        'i30',
        10.3,
        5,
        'rapido',
        'madrid',
        '0000-00-00',
        0
    ),
    (
        7777,
        'categoria',
        '1234-abc',
        'BMW',
        'i30',
        10.3,
        5,
        'rapido',
        'madrid',
        '0000-00-00',
        0
    ),
    (
        7778,
        'categoria',
        '1234-abd',
        'BMW',
        'i30',
        10.3,
        5,
        'rapido',
        'madrid',
        '2024-02-23',
        0
    );

CREATE TABLE `contratacion_servicio` (
    `id_pedido` int(11) NOT NULL,
    `id_servicio` int(3) NOT NULL,
    `dniCliente` varchar(10) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
    `servicio_contratado1` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
    `fecha_prestacion_servicio` date NOT NULL,
    `fecha_contratacion_servicio` date NOT NULL,
    `estado` enum('pagado', 'pendiente') CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
    `metodo_pago` enum('tarjeta', 'efectivo') CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
    `descripcion_servicio` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
    `total_precio_servicio` int(50) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE `entretenimiento` (
    `id_ent` int(11) NOT NULL,
    `categoria` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
    `oficio` enum('mago', 'comico', 'dj', 'stripper') CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
    `descripcion` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
    `precio` double NOT NULL,
    `observaciones` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
    `zona` varchar(30) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
    `disponibilidad` date NOT NULL,
    `puntos` int(2) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE `usuarios` (
    `dni` varchar(10) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
    `nombre` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
    `apellido` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
    `fecha_Nacimiento` date NOT NULL,
    `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
    `contraseña` varchar(6) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
    `telefono` varchar(15) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
    `puntos` int(3) NOT NULL,
    `fotografia` int(35) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

insert into usuarios (dni, nombre, apellido, fecha_nacimiento, email, contraseña, telefono, puntos, fotografia) values ("56457898T", "anibal", "lopez", '1991-01-15', "anibal@hola.com", "789456123", "789456123", 90, 88);
insert into usuarios (dni, nombre, apellido, fecha_nacimiento, email, contraseña, telefono, puntos, fotografia) values ("85085169G", "nico", "perez", '1992-01-15', "nico@hola.com", "789456123", "789456123", 90, 88);
insert into usuarios (dni, nombre, apellido, fecha_nacimiento, email, contraseña, telefono, puntos, fotografia) values ("37196166Z", "pablo", "gallego", '1993-01-15', "pablo@hola.com", "789456123", "789456123", 90, 88);
insert into usuarios (dni, nombre, apellido, fecha_nacimiento, email, contraseña, telefono, puntos, fotografia) values ("27804210Q", "justin", "duran", '1994-01-15', "justin@hola.com", "789456123", "789456123", 90, 88);
insert into usuarios (dni, nombre, apellido, fecha_nacimiento, email, contraseña, telefono, puntos, fotografia) values ("46726251A", "bruno", "gil", '1995-01-15', "bruno@hola.com", "789456123", "789456123", 90, 88);
insert into usuarios (dni, nombre, apellido, fecha_nacimiento, email, contraseña, telefono, puntos, fotografia) values ("96771284A", "bouthayna", "cabreras", '1996-01-15', "bouthayna@hola.com", "789456123", "789456123", 90, 88);
insert into usuarios (dni, nombre, apellido, fecha_nacimiento, email, contraseña, telefono, puntos, fotografia) values ("83405816L", "julio", "vega", '1997-01-15', "julio@hola.com", "789456123", "789456123", 90, 88);
insert into usuarios (dni, nombre, apellido, fecha_nacimiento, email, contraseña, telefono, puntos, fotografia) values ("45697183R", "julian", "sanchez", '1998-01-15', "julian@hola.com", "789456123", "789456123", 90, 88);
insert into usuarios (dni, nombre, apellido, fecha_nacimiento, email, contraseña, telefono, puntos, fotografia) values ("03189394F", "paco", "muñoz", '1999-01-12', "paco@hola.com", "789456123", "789456123", 90, 88);
insert into usuarios (dni, nombre, apellido, fecha_nacimiento, email, contraseña, telefono, puntos, fotografia) values ("04092538X", "carmen", "plata", '2000-01-12', "carmen@hola.com", "789456123", "789456123", 90, 88);
insert into usuarios (dni, nombre, apellido, fecha_nacimiento, email, contraseña, telefono, puntos, fotografia) values ("95191081S", "geles", "geles", '2001-01-12', "geles@hola.com", "789456123", "789456123", 90, 88);
insert into usuarios (dni, nombre, apellido, fecha_nacimiento, email, contraseña, telefono, puntos, fotografia) values ("56457898T", "alberto", "garcia", '2002-01-12', "alberto@hola.com", "789456123", "789456123", 90, 88);
insert into usuarios (dni, nombre, apellido, fecha_nacimiento, email, contraseña, telefono, puntos, fotografia) values ("56457898T", "jaime", "gimenez", '2003-01-12', "jaime@hola.com", "789456123", "789456123", 90, 88);

ALTER TABLE `catering`
ADD PRIMARY KEY (`id_cat`);
ALTER TABLE `coches`
ADD PRIMARY KEY (`id_coches`) USING BTREE;
ALTER TABLE `contratacion_servicio`
ADD PRIMARY KEY (`id_pedido`);
ALTER TABLE `entretenimiento`
ADD PRIMARY KEY (`id_ent`);
ALTER TABLE `catering`
MODIFY `id_cat` int(11) NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 15;
ALTER TABLE `coches`
MODIFY `id_coches` int(11) NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 7779;
ALTER TABLE `contratacion_servicio`
MODIFY `id_pedido` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `entretenimiento`
MODIFY `id_ent` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;