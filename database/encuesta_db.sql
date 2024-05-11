CREATE DATABASE encuesta_db;

USE encuesta_db;

CREATE TABLE entrevistado (

    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(180),
    apellido VARCHAR(180),
    ciudad VARCHAR(180),
    fecha_entrevista TIMESTAMP DEFAULT CURRENT_TIMESTAMP
); 

    
    DESCRIBE entrevistado;