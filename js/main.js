let cartasEnTablero = [];
let reversos = []
let cartasUsadas = [];
let cartas = [];
let $casillas = [];
let intentos = 0;
let tiempo = 0;
let reloj;

function almacenarCartas() {
    $cartas = document.querySelectorAll(".carta");
    $cartas.forEach($carta =>
        cartas.push($carta)
    );
    let $reversos = document.querySelectorAll(".reverso-carta");
    $reversos.forEach($reverso =>
        reversos.push($reverso)
    );
    return;
}

document.querySelector(".start").onclick = habilitarTablero;


function habilitarTablero() {
    reset();
    almacenarCartas();
    $casillas = document.querySelectorAll(".casilla");
    $casillas.forEach($casilla => buscarCarta($casilla));
    activarReloj();
    habilitarSeleccion();

    return;
}

function buscarCarta(casilla) {
    let i = Math.floor(Math.random() * 16);
    let cartaAleatoria = cartas[i];
    let cartaDisponible = cartasUsadas.every(carta => carta !== cartas.indexOf(cartaAleatoria));
    if (cartaDisponible) {
        return asignarCarta(casilla, cartaAleatoria);
    } else {
        return buscarCarta(casilla);
    }
}

function asignarCarta(casilla, cartaAsignada) {
    cartaAsignada.classList.add("girada");
    casilla.appendChild(cartaAsignada);
    cartasUsadas.push(cartas.indexOf(cartaAsignada));
    return cartasEnTablero.push(cartaAsignada);
}

function habilitarSeleccion() {
    return reversos.forEach(reverso => reverso.addEventListener("click", manejarJugada, true));
}

function bloquearSeleccion() {
    return reversos.forEach(reverso => reverso.removeEventListener("click", manejarJugada, true));
}

function reset() {
    cartasEnTablero.forEach(function(cartaEnTablero) {
        cartaEnTablero.classList.remove("pareja-acertada");
        cartaEnTablero.remove()
    });
    cartasEnTablero = [];
    cartasUsadas = [];
    tiempo = 0;
    intentos = 0;
    $casillas.forEach($casilla => $casilla.classList.remove("giro"));
    document.querySelector("#estado").innerText = "";
    return;
}