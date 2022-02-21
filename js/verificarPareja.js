import {habilitarSeleccion} from './ui.js/tablero.js'

export function verificarPareja() {
    let $cartasSeleccionadas = document.querySelectorAll(".seleccionada");
    $cartasSeleccionadas.forEach(cartaMostrada => cartaMostrada.classList.remove('seleccionada'));
    if ($cartasSeleccionadas[0].id === $cartasSeleccionadas[1].id) {
        chequearExito();
        return setTimeout(anotarAcierto, 500);
    } else {
        return setTimeout(ocultarCartas, 1200);
    }
}

function anotarAcierto() {
    document.querySelectorAll(".seleccionada").forEach($carta =>
        $carta.classList.add("pareja-acertada")
    );
    habilitarSeleccion();
    return 
}

function chequearExito() {
    const acertadas = document.querySelectorAll(".seleccionada");
    if (acertadas.length === 16) {
        document.querySelector("#intro-tiempo").innerText = "Tardaste ";
        clearInterval(reloj);
        aciertos = 0;
        return actualizarEstado("exito");
    }
    return;
}