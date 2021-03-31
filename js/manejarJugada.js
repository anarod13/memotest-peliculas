let cartasArriba = 0;
let aciertos = 0;
let casillasSeleccionadas = [];

function manejarJugada(e) {
    let cartaSeleccionada = e.target;
    let posicion = reversos.indexOf(cartaSeleccionada);
    casillasSeleccionadas.push(posicion);
    $casillas[posicion].classList.add("giro");
    cartasEnTablero[posicion].classList.add("mostrada");
    cartasArriba++;

    if (cartasArriba === 2) {
        bloquearSeleccion();
        intentos++;
        actualizarEstado(intentos);
        return verificarPareja();
    }
    if (cartasArriba > 2) { return "ERROR: Se muestran más de dos cartas" }

    return;
}

function chequearExito() {
    if (aciertos === 8) {
        document.querySelector("#intro-tiempo").innerText = "Tardaste ";
        clearInterval(reloj);
        aciertos = 0;
        return actualizarEstado("exito");
    }
    return;
}