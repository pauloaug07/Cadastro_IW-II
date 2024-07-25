// config.js
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',  // Seu usuário do MySQL
    database: 'cadastro_clientes'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao MySQL!');
});

module.exports = connection;
