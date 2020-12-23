let cartasArriba = 0;
let intentos = 0;
let exito = 0
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
        return verificarPareja();
    }
    if (cartasArriba > 2) { return "ERROR: Se muestran más de dos cartas" }

    return;
}