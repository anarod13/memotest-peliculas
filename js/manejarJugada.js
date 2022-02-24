import {bloquearSeleccion} from './ui.js/tablero.js'
import {actualizarEstado} from './ui.js/alertas.js'
import {verificarPareja} from './verificarPareja.js'

export function manejarJugada(e) {
    const cartaSeleccionada = e.target;
    const $casilla = cartaSeleccionada.parentNode;
    $casilla.classList.add("giro");
    $casilla.classList.add('seleccionada');
    const cartasArriba= document.querySelectorAll('.seleccionada')
    if (cartasArriba.length === 2) {
        bloquearSeleccion();
        actualizarEstado();
        verificarPareja()
        return;
    }

    return;
}
