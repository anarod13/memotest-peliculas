let cartas = [];
let cartasEnTablero = [];
let $reversos = document.querySelectorAll(".reverso-carta");



function almacenarCartas() {
    $cartas = document.querySelectorAll(".carta");
    $cartas.forEach($carta => {
        cartas.push($carta)

    });
    return cartas;
}

almacenarCartas();

function habilitarTablero() {
    cartasEnTablero = [];

    let $casillas = document.querySelectorAll(".casilla");
    $casillas.forEach($casilla => buscarCarta($casilla));

    $reversos.forEach($reverso => $reverso.classList.add("oculto"));

    return;
}


function buscarCarta(casilla) {
    let i = Math.floor(Math.random() * 16);
    let cartaAsignada = cartas[i];
    // if (cartasEnTablero === undefined) {
    //     return asignarCarta(casilla, cartaAsignada);
    // }
    let cartaDisponible = cartasEnTablero.every(carta => carta !== cartas.indexOf(cartaAsignada));
    if (cartaDisponible) {
        return asignarCarta(casilla, cartaAsignada);
    } else {
        return buscarCarta(casilla);
    }

}

function asignarCarta(casilla, cartaAsignada) {
    casilla.appendChild(cartaAsignada);
    return cartasEnTablero.push(cartas.indexOf(cartaAsignada));
}