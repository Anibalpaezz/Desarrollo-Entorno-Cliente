drop database pacofiesta;
create database pacofiesta;
use pacofiesta;
-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-02-2024 a las 09:55:59
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;
/*!40101 SET NAMES utf8mb4 */
;
--
-- Base de datos: `pacofiesta`
--

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `catering`
--


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
--
-- Volcado de datos para la tabla `catering`
--

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
-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `coches`
--

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
--
-- Volcado de datos para la tabla `coches`
--

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
-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `contratacion_servicio`
--

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
-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `entretenimiento`
--

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
-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `usuarios`
--

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

insert into usuarios (dni, nombre, apellido, fecha_nacimiento, email, contraseña, telefono, puntos, fotografia) values ("56457898T", "anibal", "lopez", '1991-01-15', "hola@hola.com", "789456123", "789456123", 90, 88);
insert into usuarios (dni, nombre, apellido, fecha_nacimiento, email, contraseña, telefono, puntos, fotografia) values ("56457898T", "nico", "perez", '1992-01-15', "hola@hola.com", "789456123", "789456123", 90, 88);
insert into usuarios (dni, nombre, apellido, fecha_nacimiento, email, contraseña, telefono, puntos, fotografia) values ("56457898T", "pablo", "gallego", '1993-01-15', "hola@hola.com", "789456123", "789456123", 90, 88);
insert into usuarios (dni, nombre, apellido, fecha_nacimiento, email, contraseña, telefono, puntos, fotografia) values ("56457898T", "justin", "duran", '1994-01-15', "hola@hola.com", "789456123", "789456123", 90, 88);
insert into usuarios (dni, nombre, apellido, fecha_nacimiento, email, contraseña, telefono, puntos, fotografia) values ("56457898T", "bruno", "gil", '1995-01-15', "hola@hola.com", "789456123", "789456123", 90, 88);
insert into usuarios (dni, nombre, apellido, fecha_nacimiento, email, contraseña, telefono, puntos, fotografia) values ("56457898T", "bouthayna", "cabreras", '1996-01-15', "hola@hola.com", "789456123", "789456123", 90, 88);
insert into usuarios (dni, nombre, apellido, fecha_nacimiento, email, contraseña, telefono, puntos, fotografia) values ("56457898T", "julio", "vega", '1997-01-15', "hola@hola.com", "789456123", "789456123", 90, 88);
insert into usuarios (dni, nombre, apellido, fecha_nacimiento, email, contraseña, telefono, puntos, fotografia) values ("56457898T", "julian", "sanchez", '1998-01-15', "hola@hola.com", "789456123", "789456123", 90, 88);
insert into usuarios (dni, nombre, apellido, fecha_nacimiento, email, contraseña, telefono, puntos, fotografia) values ("56457898T", "julito", "sanchez", '1998-01-12', "hola@hola.com", "789456123", "789456123", 90, 88);
--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `catering`
--
ALTER TABLE `catering`
ADD PRIMARY KEY (`id_cat`);
--
-- Indices de la tabla `coches`
--
ALTER TABLE `coches`
ADD PRIMARY KEY (`id_coches`) USING BTREE;
--
-- Indices de la tabla `contratacion_servicio`
--
ALTER TABLE `contratacion_servicio`
ADD PRIMARY KEY (`id_pedido`);
--
-- Indices de la tabla `entretenimiento`
--
ALTER TABLE `entretenimiento`
ADD PRIMARY KEY (`id_ent`);
--
-- Indices de la tabla `usuarios`
--
--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `catering`
--
ALTER TABLE `catering`
MODIFY `id_cat` int(11) NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 15;
--
-- AUTO_INCREMENT de la tabla `coches`
--
ALTER TABLE `coches`
MODIFY `id_coches` int(11) NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 7779;
--
-- AUTO_INCREMENT de la tabla `contratacion_servicio`
--
ALTER TABLE `contratacion_servicio`
MODIFY `id_pedido` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `entretenimiento`
--
ALTER TABLE `entretenimiento`
MODIFY `id_ent` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;