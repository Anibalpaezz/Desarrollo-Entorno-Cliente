USE pacoparty;
DROP TABLE IF EXISTS usuario;

CREATE TABLE usuarios (
    DNI int(10) primary key,
    nombre varchar(50),
    apellido varchar(50),
    fecha_nacimiento date,
    correo varchar(255) unique,
    telefono varchar(15) unique,
    direccion varchar(50) default null,
    codigo_postal varchar(20),
    fotografia varchar(35),
    pass varchar(6) not null,
    puntos int(3) default 0,
    permisos boolean default false,
    fecha_registro timestamp default current_timestamp,
    IP varchar(45)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO usuarios (usuario, pass, permisos, correo, fecha_nacimiento, direccion, Codigo_postal, IP)
VALUES ('anibal', '123456', 1, 'anibal@anibal.com', '1990-01-15', 'Calle Principal 123', '12345', '192.168.1.1');

INSERT INTO usuarios (usuario, pass, permisos, correo, fecha_nacimiento, direccion, Codigo_postal, IP)
VALUES ('nico', '123456', 0, 'nico@nico.com', '1985-05-20', 'Avenida Principal 456', '54321', '192.168.1.2');






