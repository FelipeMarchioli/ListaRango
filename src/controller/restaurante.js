//Importando model a ser utilizada
const Restaurante = require('../model/restaurante');

module.exports = {
    async listarRestaurante(req, res, next) {
        try {
            const cnpj = req.params.cnpj;

            let restaurante  = await Restaurante.findOne({'cnpj': cnpj});
        
            return res.json(restaurante);
        } catch (err) {
            next(err);
        }
    },
}
