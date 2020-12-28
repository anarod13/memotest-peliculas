function actualizarEstado(intento) {
    let estado = "Intentos: " + intento;

    if (intento === "exito") {
        estado = "Ganaste! Toca Empezar! para jugar de vuelta"
    }
    return document.querySelector("#estado").innerText = estado;
}


function actualizarTiempoDeJuego() {

    reloj = setInterval(function() {
        let tiempoDeJuego = calcularTiempo()
        document.querySelector("#tiempo").innerText = tiempoDeJuego;
    }, 1000);
    return;
}

function calcularTiempo() {
    tiempo++;
    let minutos = Math.floor(tiempo / 60);
    let segundos = tiempo % 60;
    return `Llevas ${minutos} minutos y ${segundos} segundos jugando`;
}