const express = require('express');

const Restaurante = require('./controller/restaurante');
const Produto = require('./controller/produto'); 

const routes = express.Router();

routes.get('/api/v1/restaurante/listar/:cnpj', Restaurante.listarRestaurante);

routes.get('/api/v1/restaurante/listarTodos', Restaurante.listarTodosRestaurante);

routes.post('/api/v1/restaurante/cadastrar', Restaurante.cadastrarRestaurante);

routes.put('/api/v1/restaurante/atualizar', Restaurante.atualizarRestaurante);

routes.delete('/api/v1/restaurante/excluir', Restaurante.excluirRestaurante);

module.exports = routes; 