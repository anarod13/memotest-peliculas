let cartasArriba = 0;

let aciertos = 0;
let casillasSeleccionadas = [];

function manejarJugada(e) {
    let cartaSeleccionada = e.target;
    cartaSeleccionada.classList.add("oculto")
    let posicion = reversos.indexOf(cartaSeleccionada);
    casillasSeleccionadas.push(posicion);
    cartasEnTablero[posicion].classList.remove("oculto");
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
        clearInterval(reloj);
        aciertos = 0;
        return actualizarEstado("exito");
    }
    return;
}