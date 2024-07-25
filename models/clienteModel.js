// models/clienteModel.js
const db = require('../config');

// Obtém todos os clientes
const getClientes = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM clientes', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

// Adiciona um novo cliente
const addCliente = (cliente) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO clientes SET ?', cliente, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

// Obtém um cliente por ID
const getClienteById = (id) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM clientes WHERE id = ?', [id], (err, rows) => {
            if (err) reject(err);
            resolve(rows[0]);
        });
    });
};

// Atualiza um cliente
const updateCliente = (id, cliente) => {
    return new Promise((resolve, reject) => {
        db.query('UPDATE clientes SET ? WHERE id = ?', [cliente, id], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

// Deleta um cliente
const deleteCliente = (id) => {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM clientes WHERE id = ?', [id], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

module.exports = {
    getClientes,
    addCliente,
    getClienteById,
    updateCliente,
    deleteCliente
};
