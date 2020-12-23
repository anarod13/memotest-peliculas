let cartasEnTablero = [];
let reversos = []
let cartasAsignadas = [];
let cartas = [];

function almacenarCartas() {
    $cartas = document.querySelectorAll(".carta");
    $cartas.forEach($carta =>
        cartas.push($carta)

    );
    return cartas;
}


function habilitarTablero() {
    cartasEnTablero = [];
    let $casillas = document.querySelectorAll(".casilla");
    $casillas.forEach($casilla => buscarCarta($casilla));
    return habilitarSeleccion();
}


function buscarCarta(casilla) {

    almacenarCartas();
    let i = Math.floor(Math.random() * 16);

    let cartaAsignada = cartas[i];
    let cartaDisponible = cartasAsignadas.every(carta => carta !== cartas.indexOf(cartaAsignada));
    if (cartaDisponible) {
        return asignarCarta(casilla, cartaAsignada);
    } else {
        return buscarCarta(casilla);
    }

}

function asignarCarta(casilla, cartaAsignada) {
    casilla.appendChild(cartaAsignada);
    cartaAsignada.classList.add("oculto");
    cartasAsignadas.push(cartas.indexOf(cartaAsignada));
    return cartasEnTablero.push(cartaAsignada);
}

function habilitarSeleccion() {
    let $reversos = document.querySelectorAll(".reverso-carta");
    $reversos.forEach($reverso => reversos.push($reverso));
    return reversos.forEach(reverso => reverso.addEventListener("click", manejarJugada, true));

}

function bloquearSeleccion() {
    let $reversos = document.querySelectorAll(".reverso-carta");
    $reversos.forEach($reverso => reversos.push($reverso));
    return reversos.forEach(reverso => reverso.removeEventListener("click", manejarJugada, true));

}