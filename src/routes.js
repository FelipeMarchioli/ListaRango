const express = require('express');

const Restaurante = require('./controller/restaurante');
const Produto = require('./controller/produto'); 

const routes = express.Router();

routes.get('/api/v1/restaurante/listar/:cnpj', Restaurante.listarRestaurante);

routes.get('/api/v1/restaurante/listarTodos', Restaurante.listarTodosRestaurante);

module.exports = routes; 