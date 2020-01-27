function validaHorario(horaAbrir, horaFechar) {

    let dataAberto = new Date(horaAbrir);
    let dataFechado = new Date(horaFechar);
    let minAberto = dataAberto.getUTCMinutes();
    let minFechado = dataFechado.getUTCMinutes();
    let horaAberto = dataAberto.getUTCHours();
    let horaFechado = dataFechado.getUTCHours();

    if (horaAberto == horaFechado) {
        if (minFechado < minAberto + 15) {

            return {horaAbrir:"00:00", horaFechar:"00:00", erro:"Horários de funcionamento deve ter um intervalo maior que 15 minutos."};
        }
    } else if (horaAberto > horaFechado) {

        return {horaAbrir:"00:00", horaFechar:"00:00", erro:"Horários de funcionamento deve ter um intervalo maior que 15 minutos."};
    }

    if ((minAberto >= 0 && minAberto < 10) && (minFechado >= 0 && minFechado < 10)) {

        horaAbrir = horaAberto.toString() + ":0" + minAberto.toString();
        horaFechar = horaFechado.toString() + ":0" + minFechado.toString();
    } else if (minAberto >= 0 && minAberto < 10) {

        horaAbrir = horaAberto.toString() + ":0" + minAberto.toString();
        horaFechar = horaFechado.toString() + ":" + minFechado.toString();
    } else if (minFechado >= 0 && minFechado < 10) {

        horaAbrir = horaAberto.toString() + ":" + minAberto.toString();
        horaFechar = horaFechado.toString() + ":0" + minFechado.toString();
    } else {

        horaAbrir = horaAberto.toString() + ":" + minAberto.toString();
        horaFechar = horaFechado.toString() + ":" + minFechado.toString();
    }

    return {horaAbrir:horaAbrir, horaFechar:horaFechar, erro:null};
}

module.exports = {
    validaHorario: validaHorario
}