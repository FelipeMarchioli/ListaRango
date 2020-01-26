const express = require('express');

const Restaurante = require('./controller/restaurante');
const Produto = require('./controller/produto'); 

const routes = express.Router();

routes.get('/api/v1/restaurante/listar/:cnpj', Restaurante.listarRestaurante);

module.exports = routes; 