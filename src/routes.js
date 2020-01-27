const express = require('express');

const Restaurante = require('./controller/restaurante');
const Produto = require('./controller/produto'); 

const routes = express.Router();

routes.get('/api/v1/restaurante/listar/:cnpj', Restaurante.listarRestaurante);

routes.get('/api/v1/produto/listar/:id', Produto.listarProduto);

routes.get('/api/v1/produto/listarTodos', Produto.listarTodosProduto);

routes.post('/api/v1/produto/cadastrar', Produto.cadastrarProduto);

routes.put('/api/v1/produto/atualizar', Produto.atualizarProduto);

routes.delete('/api/v1/produto/excluir', Produto.excluirProduto);

module.exports = routes; 