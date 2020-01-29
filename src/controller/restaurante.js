const azure = require('azure-storage');
const guid = require('guid')
//Importando model a ser utilizada
const Utils = require('../../utils/utils');
const Restaurante = require('../model/restaurante');
const config = require('../../config/config');

module.exports = {
    async listarRestaurante(req, res, next) {
        try {

            //recebendo parâmetro da url para posterior pesquisa no banco
            const cnpj = req.params.cnpj;

            let restaurante  = await Restaurante.findOne({'cnpj': cnpj});
        
            return res.json(restaurante);
        } catch (err) {
            next(err);
        }
    },
    async cadastrarRestaurante(req, res, next) {
        try {
            const dados = req.body;

            let restaurante = await Restaurante.findOne({'cnpj': dados.cnpj});

            if (!restaurante) {
                dados.created = new Date();
                dados.updated = new Date();

                //Upload imagem Azure
                //Cria o blob service
                const blobSrv = azure.createBlobService(config.azureConnectionString);

                let filename = guid.raw().toString() + '.jpg';
                let rawData = req.body.fotoRestaurante;
                let matches = rawData.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
                let type = matches[1];
                let buffer = new Buffer(matches[2], 'base64');

                //Salvando a imagem no azure
                await blobSrv.createBlockBlobFromText('restaurant-images', filename, buffer, {
                    contentType: type
                }, function (err, result, response) {
                    if (err) {
                        filename = 'default-restaurant.png';
                    }
                });

                dados.fotoRestaurante = 'https://nodestoreteste.blob.core.windows.net/restaurant-images/' + filename;

                //Iniciando regra do horario de funcionamento do restaurante
                dados.horarioFuncionamento.forEach(item => {
                    
                    //Iniciando regra do horario de funcionamento do Produto
                    let data = Utils.validaHorario(item.horarioAberto, item.horarioFechado)

                    if (data.erro) {
                        
                        return res.status(500).json('Horários de funcionamento deve ter um intervalo maior que 15 minutos.');
                    }

                    item.horarioAberto = data.horaAbrir;
                    item.horarioFechado = data.horaFechar;
                });
  
                //Realizando comunicação com BD
                let restaurante  = await Restaurante.create(dados);

                return res.json(restaurante);
            }

            return res.status(500).json("Restaurante já cadastrado.");
        } catch (err) {
            next(err);
        }
    },
    async listarTodosRestaurante(req, res, next) {
        try {

            let restaurante  = await Restaurante.find();
        
            return res.json(restaurante);
        } catch (err) {
            next(err);
        }
    },
    async atualizarRestaurante(req, res, next) {
        try {

            //recebendo JSON da requisição para atualizar
            const dados = req.body;

            //for para cada dia de funcionamento e posterior validação do horário
            dados.horarioFuncionamento.forEach(item => {
                
                //Chamando validação de horário
                let data = Utils.validaHorario(item.horarioAberto, item.horarioFechado)

                if (data.erro) {
                    
                    return res.json('Horários de funcionamento deve ter um intervalo maior que 15 minutos.');
                }

                item.horarioAberto = data.horaAbrir;
                item.horarioFechado = data.horaFechar;
            });            

            //Chamando validação de horário
            dados.updated = new Date();
            
            //comunição com o banco para atualizar os dados segundo o parâmetro cnpj
            let restaurante  = await Restaurante.findOneAndUpdate({'cnpj': dados.cnpj}, dados, {
                new: true,
                upsert: true
            });
        
            return res.json(restaurante);
        } catch (err) {
            next(err);
        }
    },
    async excluirRestaurante(req, res, next) {
        try {

            //recebendo JSON da requisição para exclusão
            const dados = req.body;

            let restaurante  = await Restaurante.deleteOne({'cnpj': dados.cnpj});
        
            return res.json(restaurante);
        } catch (err) {
            next(err);
        }
    }, 
};
