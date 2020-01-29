function validaHorario(horaAbrir, horaFechar) {

    let minAberto = horaAbrir.split(":")[1];
    let minFechado = horaFechar.split(":")[1];
    let horaAberto = horaAbrir.split(":")[0];
    let horaFechado = horaFechar.split(":")[0];

    //Início da verificação do horário
    if (parseInt(horaAberto) == parseInt(horaFechado)) {
        if (parseInt(minFechado) < parseInt(minAberto) + 15) {

            return {horaAbrir:"00:00", horaFechar:"00:00", erro:"Horários de funcionamento deve ter um intervalo maior que 15 minutos."};
        }
    } else if (parseInt(horaAberto) > parseInt(horaFechado)) {

        return {horaAbrir:"00:00", horaFechar:"00:00", erro:"Horários de funcionamento deve ter um intervalo maior que 15 minutos."};
    }

    if ((parseInt(minAberto) >= 0 && parseInt(minAberto) < 10) && (parseInt(minFechado) >= 0 && parseInt(minFechado) < 10)) {

        horaAbrir = horaAberto + ":0" + minAberto;
        horaFechar = horaFechado + ":0" + minFechado;
    } else if (parseInt(minAberto) >= 0 && parseInt(minAberto) < 10) {

        horaAbrir = horaAberto + ":0" + minAberto;
        horaFechar = horaFechado + ":" + minFechado;
    } else if (parseInt(minFechado) >= 0 && parseInt(minFechado) < 10) {

        horaAbrir = horaAberto + ":" + minAberto;
        horaFechar = horaFechado + ":0" + minFechado;
    } else {

        horaAbrir = horaAberto + ":" + minAberto;
        horaFechar = horaFechado + ":" + minFechado;
    }

    return {horaAbrir:horaAbrir, horaFechar:horaFechar, erro:null};
}

module.exports = {
    validaHorario: validaHorario
}