USE pacoparty;
DROP TABLE IF EXISTS coches;

CREATE TABLE coches(
    ID int auto_increment primary key,
    categoria varchar(100),
    matricula varchar(8) unique,
    marca varchar(20),
    modelo varchar(40),
    precio_hora double,
    plazas tinyint,
    opciones varchar(40),
    disponibilidad boolean
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;