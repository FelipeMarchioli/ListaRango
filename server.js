const app = require('./app')
const mongoose = require('mongoose');

//Iniciando servidor
app.listen(process.env.PORT || 3333, () => {
    console.log(`Servidor ativo na porta 3333`)
});

//Conectando BD
//URL do banco criado através do atlas - MongoDB
mongoose.connect('mongodb+srv://felipe:felipe@projetogoomer-3fz8n.mongodb.net/Goomer', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});