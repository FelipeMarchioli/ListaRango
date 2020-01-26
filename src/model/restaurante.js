const mongoose = require('mongoose');

const RestauranteSchema = new mongoose.Schema({
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