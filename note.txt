const express = require ('express');
const app = express();
const { Pool } = require('pg');
const port = 8080;

app.use(express.static('CSS'));
app.use(express.static('Icone'));

//EJS
app.set('views','./views');
app.set('view engine','ejs');


const pool = new Pool({
user: 'gerant',
host: 'localhost',
database: 'site',
password: 'test',
port: 5432,
});

app.get('/', (req, res) => {
    pool.query('SELECT * FROM produit', (error, results) => {
        if (error) {
            throw error;
        }
        res.render('app');
    });
});

app.listen(port, () => {
console.log(`App listening at http://localhost:${port}`);
});
