CREATE USER gerant WITH PASSWORD 'test';
CREATE DATABASE site WITH OWNER gerant;
DROP TABLE IF EXISTS vetement;
DROP DATABASE IF EXISTS panier;
DROP DATABASE IF EXISTS client;
DROP DATABASE IF EXISTS gerant;
CREATE DATABASE  panier;
CREATE TABLE vetement (
  id SERIAL PRIMARY KEY,
  type_vetement VARCHAR(15),
  image TEXT,
  description TEXT NOT NULL,
  prix DECIMAL(10,2) NOT NULL
);

INSERT INTO vetement(type_vetement,image,description,prix) VALUES 
('pantalons','Client/Vetement/pantalons/0.jpg','HIGH-RISE STOVE PIPE TRF JEANS BLEUE',29.95),
('pantalons','Client/Vetement/pantalons/1.jpg','HIGH-RISE STOVE PIPE TRF JEANS BLEUE',29.95),
('pantalons','Client/Vetement/pantalons/2.jpg','HIGH-RISE STOVE PIPE TRF JEANS',29.95),
('pantalons','Client/Vetement/pantalons/3.jpg','LOW-RISE PATCHWORK BOYFRIEND TRF JEANS',59.95);

