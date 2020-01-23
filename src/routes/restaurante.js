module.exports = app => {
    const controller = require('../controller/restaurante')();

    app.route('/api/v1/listarRestaurantes') 
        .get(controller.listarRestausrantes);
    
    // app.route('/api/v1/listarDetalheRestaurante') 
    //     .get(controller.listarDetalheRestaurante);
    
    // app.route('/api/v1/cadastrarRestaurante') 
    //     .post(controller.cadastrarRestaurante);

    // app.route('/api/v1/alterarRestaurante') 
    //     .put(controller.alterarRestaurante);
}