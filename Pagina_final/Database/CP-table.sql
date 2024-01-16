USE pacoparty;
CREATE TABLE codipostal (
  ID int(10) UNSIGNED NOT NULL,
  CP decimal(5,0) NOT NULL,
  calle varchar(100) DEFAULT NULL,
  poblacion varchar(100) NOT NULL,
  provincia varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;