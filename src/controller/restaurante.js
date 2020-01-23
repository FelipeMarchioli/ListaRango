const azure = require('azure-storage');
const guid = require('guid');

module.exports = () => {
    const listarRestausrantesDB = require('../data/teste.json');
    const controller = {};
  
    controller.listarRestausrantes = (req, res) => res.status(200).json(listarRestausrantesDB);
  
    return controller;
  }