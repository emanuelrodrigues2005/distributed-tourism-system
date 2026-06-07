-- Init script executado automaticamente na primeira inicialização do container PostGIS
-- Cria os bancos lógicos para cada microsserviço relacional

CREATE DATABASE db_auth;
CREATE DATABASE db_catalog;
CREATE DATABASE db_reviews;
CREATE DATABASE db_curation;

-- Habilita a extensão PostGIS em cada banco que precisa de geolocalização
\c db_catalog;
CREATE EXTENSION IF NOT EXISTS postgis;
