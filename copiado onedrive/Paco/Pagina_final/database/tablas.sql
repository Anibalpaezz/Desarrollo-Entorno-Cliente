drop database paco_party;
create database paco_party;
use paco_party;

create table usuarios(
    ID int auto_increment primary key,
    usuario varchar(30),
    pass tinyint unsigned,
    nombre varchar(30),
    apellido1 varchar(30),
    apellido2 varchar(30),
    fechanac date,
    permisos boolean default 0
)engine=InnoDB;

use paco_party;
insert into usuarios (usuario, pass, nombre) values ("anibal", "nico", "Anibal");
