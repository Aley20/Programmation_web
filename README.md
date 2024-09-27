# Projet PW6

Pour se connecter à la BDD :
1. lancer serveur psql : pg_ctl- /usr/local/ar/potgresstart
2. $createdb site 
$psql -U gerant -h localhost -p 5432 -d site -f init.sql

3. executer node main.js pour lancer le serveur et connecter la BDD