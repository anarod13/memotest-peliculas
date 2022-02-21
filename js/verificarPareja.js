import {habilitarSeleccion} from './ui.js/tablero.js'
import { ocultarCartas } from './ui.js/tablero.js';
import { actualizarEstado } from './ui.js/alertas.js';
import {reloj, activarReloj} from './reloj.js'

export function verificarPareja() {
    let $cartasSeleccionadas = document.querySelectorAll(".seleccionada");
    // $cartasSeleccionadas.forEach(cartaMostrada => cartaMostrada.classList.remove('seleccionada'));
    if ($cartasSeleccionadas[0].id === $cartasSeleccionadas[1].id) {
        setTimeout(anotarAcierto, 500)
        setTimeout(chequearExito, 500);
        return;
    } else {
        setTimeout(ocultarCartas, 1200);
        return;
    }
}

function anotarAcierto() {
    document.querySelectorAll(".seleccionada").forEach($carta =>{
        $carta.children[1].classList.add("pareja-acertada");
        $carta.classList.remove('seleccionada');}
    );
    habilitarSeleccion();
    return 
}

function chequearExito() {
    const acertadas = document.querySelectorAll(".pareja-acertada");
    if (acertadas.length === 16) {
        document.querySelector("#intro-tiempo").innerText = "Tardaste ";
        clearInterval(reloj);
        actualizarEstado("exito");
        return;
    }
    return;
}