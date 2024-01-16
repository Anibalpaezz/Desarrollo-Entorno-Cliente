DROP DATABASE IF EXISTS pacoparty;

CREATE DATABASE pacoparty CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE usuarios (
    ID int auto_increment primary key,
    usuario varchar(50) unique,
    pass varchar(255) not null,
    permisos tinyint not null default 0,
    correo varchar(255) unique,
    fecha_nacimiento date,
    fecha_registro timestamp default current_timestamp,
    direccion varchar(50) default null,
    Codigo_postal varchar(20),
    IP varchar(45)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO usuarios (usuario, pass, permisos, correo, fecha_nacimiento, direccion, Codigo_postal, IP)
VALUES ('anibal', '123456', 1, 'anibal@anibal.com', '1990-01-15', 'Calle Principal 123', '12345', '192.168.1.1');

INSERT INTO usuarios (usuario, pass, permisos, correo, fecha_nacimiento, direccion, Codigo_postal, IP)
VALUES ('nico', '123456', 0, 'nico@nico.com', '1985-05-20', 'Avenida Principal 456', '54321', '192.168.1.2');






