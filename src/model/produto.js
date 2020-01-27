const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
    fotoProduto: String,
    nome: String,
    preco: Number,
    categoria: String,
    promocao: {
        descricao: String,
        precoPromocao: Number,
        horarioPromocao: [
            {
                diaSemana: String,
                horarioAberto: String,
                horarioFechado: String
            }
        ]
    }
});
module.exports = mongoose.model('Produto', ProdutoSchema);