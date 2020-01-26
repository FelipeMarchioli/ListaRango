//Importando frameworks/pacotes internos
const  express = require('express');
const bodyParser = require('body-parser');

class AppController {
   constructor() {
      this.express = express();

      this.middleware();
      this.routes();
   }

   middleware() {

      this.express.use(express.json());
   }

   routes() {

      this.express.use(require("./src/routes"));
   }
}

module.exports = new AppController().express;
