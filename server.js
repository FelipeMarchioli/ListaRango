const app = require('./app')
const config = require('./config/config')
const mongoose = require('mongoose');
const config = require('./config/config');


//Iniciando servidor
app.listen(process.env.PORT || config.server.port, () => {
    console.log(`Servidor ativo na porta 3333`)
});

//Conectando BD
//URL do banco criado através do atlas - MongoDB
mongoose.connect(config.DB.connectionPath, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});