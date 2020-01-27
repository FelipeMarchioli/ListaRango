const azure = require('azure-storage');
const guid = require('guid')
//Importando model a ser utilizada
const Utils = require('../../utils/utils');
const Produto = require('../model/produto');
const config = require('../../config/config');

module.exports = {
    async listarProduto(req, res, next) {
        try {
            const id = req.params.id;

            let produto  = await Produto.findOne({'_id': id});
        
            return res.json(produto);
        } catch (err) {
            next(err);
        }
    },
    async listarTodosProduto(req, res, next) {
        try {

            let produto  = await Produto.find();
        
            return res.json(produto);
        } catch (err) {
            next(err);
        }
    },
    async cadastrarProduto(req, res, next) {
        try {
            const dados = req.body;

            dados.created = new Date();
            dados.updated = new Date();

            //Upload imagem Azure
            //Cria o blob service
            const blobSrv = azure.createBlobService(config.azureConnectionString);

            let filename = guid.raw().toString() + '.jpg';
            let rawData = req.body.fotoProduto;
            let matches = rawData.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
            let type = matches[1];
            let buffer = new Buffer(matches[2], 'base64');

            //Salvando a imagem no azure
            await blobSrv.createBlockBlobFromText('product-images', filename, buffer, {
                contentType: type
            }, function (err, result, response) {
                if (err) {
                    filename = 'default-product.png';
                }
            });

            dados.fotoProduto = 'https://nodestoreteste.blob.core.windows.net/product-images/' + filename;

            //Iniciando regra do horario de funcionamento do Produto
            dados.promocao.horarioPromocao.forEach(item => {
                
                let data = Utils.validaHorario(item.horarioAberto, item.horarioFechado)

                if (data.erro) {
                    
                    return res.json('Horários de funcionamento deve ter um intervalo maior que 15 minutos.');
                }

                item.horarioAberto = data.horaAbrir;
                item.horarioFechado = data.horaFechar;
            });
  
            //Realizando comunicação com BD
            let produto  = await Produto.create(dados);
        
            return res.json(produto);
        } catch (err) {
            next(err);
        }
    },
    async atualizarProduto(req, res, next) {
        try {
            const dados = req.body;

            dados.promocao.horarioPromocao.forEach(item => {
                
                let data = Utils.validaHorario(item.horarioAberto, item.horarioFechado)

                if (data.erro) {
                    
                    return res.json('Horários de funcionamento deve ter um intervalo maior que 15 minutos.');
                }

                item.horarioAberto = data.horaAbrir;
                item.horarioFechado = data.horaFechar;
            });            

            dados.updated = new Date();
            
            let produto  = await Produto.findOneAndUpdate({'id': dados.id}, dados, {
                new: true,
                upsert: true
            });
        
            return res.json(produto);
        } catch (err) {
            next(err);
        }
    },
    async excluirProduto(req, res, next) {
        try {
            const dados = req.body;

            let produto  = await Produto.deleteOne({'_id': dados.id});
        
            return res.json(produto);
        } catch (err) {
            next(err);
        }
    }, 
};