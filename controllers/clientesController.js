// controllers/clientesController.js
const express = require('express');
const router = express.Router();
const clienteModel = require('../models/clienteModel');

// Rota inicial - Lista de clientes
router.get('/', async (req, res) => {
    try {
        const clientes = await clienteModel.getClientes();
        res.render('index', { clientes });
    } catch (err) {
        res.render('error', { error: err });
    }
});

// Rota para adicionar cliente (GET)
router.get('/add', (req, res) => {
    res.render('add');
});

// Rota para adicionar cliente (POST)
router.post('/add', async (req, res) => {
    try {
        await clienteModel.addCliente(req.body);
        res.redirect('/');
    } catch (err) {
        res.render('error', { error: err });
    }
});

// Rota para editar cliente (GET)
router.get('/edit/:id', async (req, res) => {
    try {
        const cliente = await clienteModel.getClienteById(req.params.id);
        res.render('edit', { cliente });
    } catch (err) {
        res.render('error', { error: err });
    }
});

// Rota para editar cliente (POST)
router.post('/edit/:id', async (req, res) => {
    try {
        await clienteModel.updateCliente(req.params.id, req.body);
        res.redirect('/');
    } catch (err) {
        res.render('error', { error: err });
    }
});

// Rota para deletar cliente
router.get('/delete/:id', async (req, res) => {
    try {
        await clienteModel.deleteCliente(req.params.id);
        res.redirect('/');
    } catch (err) {
        res.render('error', { error: err });
    }
});

module.exports = router;
