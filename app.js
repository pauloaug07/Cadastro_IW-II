// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Configuração para body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração para servir arquivos estáticos
app.use(express.static('public'));

// Configuração para EJS
app.set('view engine', 'ejs');

// Rotas
const clientesRouter = require('./controllers/clientesController');
app.use('/', clientesRouter);

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
