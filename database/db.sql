CREATE DATABASE web_chat;

USE web_chat;

CREATE TABLE usuarios (
    id          INT(100)     NOT NULL   PRIMARY KEY AUTO_INCREMENT ,
    nombre      VARCHAR(50)  NOT NULL,
    apellido    VARCHAR(50)  NOT NULL,
    email       VARCHAR(80)  NOT NULL   UNIQUE,
    password    VARCHAR(200) NOT NULL,
    img         VARCHAR(300) NOT NULL,
    ban         BOOLEAN      NOT NULL   DEFAULT     0,
    code        VARCHAR(100),
    ult_conec   DATETIME,
    creado_at   DATE,
    modifi_at   DATE,
    delete_at   DATE
);

CREATE TABLE amigos (
    id_usuario  INT(100)    NOT NULL,
    id_amigo    INT(100)    NOT NULL,
    creado_at   DATE,
    delete_at   DATE,

    CONSTRAINT fk_usuario   FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
    CONSTRAINT fk_amigo     FOREIGN KEY (id_amigo)   REFERENCES usuarios(id)
);

ALTER TABLE amigos ADD PRIMARY KEY( id_usuario, id_amigo);

CREATE TABLE solicitudes (
    id          INT(100)    NOT NULL  PRIMARY KEY AUTO_INCREMENT,
    id_emisor   INT(100)    NOT NULL,
    id_receptor INT(100)    NOT NULL,
    aceptada    BOOLEAN,
    creado_at   DATE,
    delete_at   DATE,
    CONSTRAINT  fk_emisor    FOREIGN KEY (id_emisor)     REFERENCES usuarios(id),
    CONSTRAINT  fk_receptor  FOREIGN KEY (id_receptor)   REFERENCES usuarios(id)
);

CREATE TABLE chats (
    id          INT(100)    NOT NULL    PRIMARY KEY AUTO_INCREMENT,
    creado_at   DATE,  
);

CREATE TABLE privados (
    id              INT(100) PRIMARY KEY NOT NULL,
    id_usuario_a    INT(100) NOT NULL,
    id_usuario_b    INT(100) NOT NULL,
    CONSTRAINT fk_chat_privado FOREIGN KEY (id)  REFERENCES chats(id),
    CONSTRAINT fk_usuario_a FOREIGN KEY (id_usuario_a)  REFERENCES usuarios(id),
    CONSTRAINT fk_usuario_b FOREIGN KEY (id_usuario_b)  REFERENCES usuarios(id),
);

CREATE TABLE grupos (
    id          INT(100)      PRIMARY KEY NOT NULL,
    nombre      VARCHAR(100)  NOT NULL,
    img         VARCHAR(300)  NOT NULL,
    id_creador  INT(100)      NOT NULL,
    creado_at   DATE,
    modifi_at   DATE,
    delete_at   DATE,
    CONSTRAINT  fk_chat_grupo       FOREIGN KEY (id)        REFERENCES chats(id),
    CONSTRAINT  fk_usuario_creador  FOREIGN KEY (emisor)    REFERENCES usuarios(id),
);

CREATE TABLE mensajes (

    id          INT(500)    NOT NULL    PRIMARY KEY AUTO_INCREMENT,
    id_emisor   INT(100)    NOT NULL,
    id_chat     INT(100)    NOT NULL,
    texto       VARCHAR(500),
    creado_at   DATE,
    delete_at   DATE,
    CONSTRAINT  fk_usuario_emisor FOREIGN KEY (emisor)  REFERENCES usuarios(id),
    CONSTRAINT  fk_chat_mensaje   FOREIGN KEY (id_chat) REFERENCES chats(id)
);

CREATE TABLE visto(

    id_mensaje  INT(500)    NOT NULL    PRIMARY KEY,
    id_usuario  INT(100)    NOT NULL    PRIMARY KEY , 
    id_chat     INT(100)    NOT NULL    PRIMARY KEY ,   
    create_at   DATE,
    delete_at   DATE,
    CONSTRAINT  fk_usuario_visto    FOREIGN KEY (id_usuario)    REFERENCES usuarios(id),
    CONSTRAINT  fk_mensaje_visto    FOREIGN KEY (id_mensaje)    REFERENCES mensajes(id),
    CONSTRAINT  fk_chat_visto    FOREIGN KEY (id_chat)    REFERENCES chats(id),
);

CREATE TABLE participantes (
    id_grupo    INT(100) NOT NULL,
    id_usuario  INT(100) NOT NULL,
    creado_at DATE,
    delete_at DATE,
    CONSTRAINT  fk_usuario_participante  FOREIGN KEY (id_usuario)  REFERENCES usuarios(id),
    CONSTRAINT  fk_grupo_participante    FOREIGN KEY (id_grupo)    REFERENCES grupos(id)
);

CREATE TABLE admin_grupo (
    id_grupo    INT(100) NOT NULL,
    id_usuario  INT(100) NOT NULL,
    creado_at DATE,
    delete_at DATE,
    CONSTRAINT  fk_usuario_admin  FOREIGN KEY (id_usuario)  REFERENCES usuarios(id),
    CONSTRAINT  fk_grupo_admin    FOREIGN KEY (id_grupo)    REFERENCES grupos(id),
);