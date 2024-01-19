CREATE DATABASE pacofiestas;

CREATE TABLE coches(
    matricula VARCHAR(8) PRIMARY KEY,
    marca VARCHAR(20),
    modelos VARCHAR(20),
    estado ENUM('Ocupado', 'Rservado', 'Disponible'),
    precio DOUBLE,
    puntos_obtenidos INT(2),
    ocupantes TINYINT NOT NULL
)engine=InnoDB;

CREATE TABLE decoracion(
    floriesteria VARCHAR(20),
    cuberteria VARCHAR(20)
)engine=InnoDB;

CREATE TABLE catering(
    empresa VARCHAR(50),
    menu VARCHAR(30),
    ubicacion VARCHAR(50),
    comensales SMALLINT,
    precio DOUBLE,
    puntos_obtenidos INT(2),
    PRIMARY KEY (empresa, ubicacion)
)engine=InnoDB;

CREATE TABLE fincas(
    direccion VARCHAR(50),
    codigo_postal INT,
    ciudad VARCHAR(50),
    tamaño SMALLINT,
    asistentes TINYINT,
    precio DOUBLE,
    puntos_obtenidos INT(2),
    PRIMARY KEY (direccion, codigo_postal, ciudad)
)engine=InnoDB;

CREATE TABLE entretenimiento(
    tipo enum('djs', 'bailarines', 'magos', 'comicos'),
    precio DOUBLE,
    puntos_obtenidos INT(2),
    id INT AUTO_INCREMENT PRIMARY KEY 
)engine=InnoDB;

CREATE TABLE personal(
    dni VARCHAR(9) PRIMARY KEY,
    tipo enum('camareros', 'seguridad', 'auxiliares', 'chofers'),
    precio DOUBLE
)engine=InnoDB;

CREATE TABLE disponibilidad(
    codigo VARCHAR(30),
    inicio_reserva DATE,
    horas_reservadas VARCHAR(20)
)engine=InnoDB;

CREATE TABLE usuarios(
    nombre_apellidos VARCHAR(60),
    dni VARCHAR(9) PRIMARY KEY,
    email VARCHAR(100),
    contraseña VARCHAR(30),
    puntos_obtenidos INT(3) 
)engine=InnoDB;

CREATE TABLE facturacion(
    codigo TINYINT AUTOINCREMENT,
    tiempo_contrato VARCHAR(40),
    tipo_servicio VARCHAR(60),
    CONSTRAINT fk_sv Foreign Key (tipo_servicio) REFERENCES coches(matricula)
    CONSTRAINT fk_sv Foreign Key (tipo_servicio) REFERENCES decoracion()
    CONSTRAINT fk_sv Foreign Key (tipo_servicio) REFERENCES catering(empresa, ubicaion)
    CONSTRAINT fk_sv Foreign Key (tipo_servicio) REFERENCES fincas()
    CONSTRAINT fk_sv Foreign Key (tipo_servicio) REFERENCES entretenimiento()
    CONSTRAINT fk_sv Foreign Key (tipo_servicio) REFERENCES personal()
    CONSTRAINT fk_sv Foreign Key (tipo_servicio) REFERENCES usuarios()
)engine=InnoDB;













