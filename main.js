const express=require('express')
const server=express();
const { Pool } = require('pg');

server.use(express.static('Client'));
server.use(express.static('Gerant'));
server.use(express.static('Vetement'));

//EJS
server.set('views','./views');
server.set('view engine','ejs');

const pool = new Pool({
    user: 'gerant',
    host: 'localhost',
    database: 'site',
    password: 'test',
    port: 5432,
    });
    
    server.get('/', (req, res) => {
      /*  pool.query('SELECT * FROM produit', (error, results) => {
            if (error) {
                throw error;
            }*/
            //res.render('main');
       // });
        res.render('main');
    });

server.listen(8080);