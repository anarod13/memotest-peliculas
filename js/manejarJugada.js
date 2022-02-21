import {bloquearSeleccion} from './ui.js/tablero.js'
import {actualizarEstado} from './ui.js/alertas.js'
import {verificarPareja} from './verificarPareja.js'

export function manejarJugada(e) {
    const cartaSeleccionada = e.target;
    // let posicion = cartaSeleccionada.getAttribute('index');
    cartaSeleccionada.parentNode.classList.add("giro");
 console.log(cartaSeleccionada.previousSibling)
    // cartaSeleccionada.previousSibling.classList.add('seleccionada');
    const cartasArriba= document.querySelectorAll('.seleccionada')
    if (cartasArriba.length === 2) {
        bloquearSeleccion();
        actualizarEstado();
        verificarPareja()
        return;
    }
    if (cartasArriba > 2) { return "ERROR: Se muestran más de dos cartas" }

    return;
}

// export function manejarJugada(e) {
//     let cartaSeleccionada = e.target;
//     let posicion = reversos.indexOf(cartaSeleccionada);
//     casillasSeleccionadas.push(posicion);
//     $casillas[posicion].classList.add("giro");
//     cartasEnTablero[posicion].classList.add("mostrada");
//     cartasArriba++;
//     if (cartasArriba === 2) {
//         bloquearSeleccion();
//         intentos++;
//         actualizarEstado(intentos);
//         return verificarPareja();
//     }
//     if (cartasArriba > 2) { return "ERROR: Se muestran más de dos cartas" }

//     return;
// }

