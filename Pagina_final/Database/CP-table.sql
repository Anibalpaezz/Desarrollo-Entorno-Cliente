USE pacoparty;
CREATE TABLE codipostal (
    ID int auto_increment primary key,
    CP varchar(50) unique
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;