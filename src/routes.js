const express = require('express');

const Restaurante = require('./controller/restaurante');
const Produto = require('./controller/produto'); 

const routes = express.Router();

//Rotas restaurante
routes.get('/api/v1/restaurante/listar/:cnpj', Restaurante.listarRestaurante);

routes.get('/api/v1/restaurante/listarTodos', Restaurante.listarTodosRestaurante);

routes.post('/api/v1/restaurante/cadastrar', Restaurante.cadastrarRestaurante);

routes.put('/api/v1/restaurante/atualizar', Restaurante.atualizarRestaurante);

routes.delete('/api/v1/restaurante/excluir', Restaurante.excluirRestaurante);

routes.get('/api/v1/restaurante/listar/:cnpj', Restaurante.listarRestaurante);

//Rotas produto
routes.get('/api/v1/produto/listar/:id', Produto.listarProduto);

routes.get('/api/v1/produto/listarTodos', Produto.listarTodosProduto);

routes.post('/api/v1/produto/cadastrar', Produto.cadastrarProduto);

routes.put('/api/v1/produto/atualizar', Produto.atualizarProduto);

routes.delete('/api/v1/produto/excluir', Produto.excluirProduto);

module.exports = routes; 