const reloj = document.querySelector('.reloj');

const getHora = () => {
    const fecha = new Date();

    const tiempo = {
        hora: fecha.getHours(),
        minutos: fecha.getMinutes(),
        segundos: fecha.getSeconds()
    }

    const validacionMinutos = tiempo.minutos >= 0 && tiempo.minutos < 10;
    const validacionSegundos = tiempo.segundos >= 0 && tiempo.segundos < 10;

    if (validacionMinutos) {
        tiempo.minutos = `0${tiempo.minutos}`
    }
    if (validacionSegundos) {
        tiempo.segundos = `0${tiempo.segundos}`
    }

    reloj.innerHTML = `${tiempo.hora} : ${tiempo.minutos} : ${tiempo.segundos}`;

}

setInterval(getHora, 1000);