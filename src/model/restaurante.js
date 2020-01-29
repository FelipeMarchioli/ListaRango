const mongoose = require('mongoose');

const RestauranteSchema = new mongoose.Schema({
    created: Date,
    updated: Date,
    cnpj: String,
    fotoRestaurante: String,
    nome: String,
    endereco: String,
    horarioFuncionamento: [
        {
            diaSemana: String,
            horarioAberto: String,
            horarioFechado: String
        }
    ]
});
module.exports = mongoose.model('Restaurante', RestauranteSchema);