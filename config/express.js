const express    = require('express');
const bodyParser = require('body-parser');
const config     = require('config');
const mysql = require('mysql');

module.exports = () => {
  const app = express();

  // CRIANDO CONEXÃO COM DB
  const db = mysql.createConnection ({
    host: config.get('db.host'),
    user: config.get('db.user'),
    password: config.get('db.password'),
    database: config.get('db.name')
  });

  // CONECTANDO AO DB
  db.connect(() => {
    console.log('Connected!');
  });
  global.db = db;

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT || config.get('server.port'));

  // MIDDLEWARES
  app.use(bodyParser.json());

  require('../src/routes/restaurante')(app);

  return app;
};