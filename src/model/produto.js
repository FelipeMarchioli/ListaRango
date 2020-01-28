const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    created: Date,
    updated: Date,
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