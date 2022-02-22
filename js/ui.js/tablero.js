import { manejarJugada } from "../manejarJugada.js";

export function habilitarSeleccion() {

    document.querySelectorAll('.reverso-carta').forEach(reverso => reverso.addEventListener("click", manejarJugada, true));
return;
}

export function bloquearSeleccion() {
    document.querySelectorAll('.reverso-carta').forEach(reverso => reverso.removeEventListener("click", manejarJugada, true));
    return;
}

export function ocultarCartas() {
    const $cartasSeleccionadas= document.querySelectorAll(".seleccionada")
    $cartasSeleccionadas.forEach($casilla => {
        $casilla.classList.remove('giro');
        $casilla.classList.remove('seleccionada')
    });
    habilitarSeleccion();
    return ;
}

export function asignarCartas(juegoDeCartas, ordenDeCartas){
    const $cartas = document.querySelectorAll('.carta');
    $cartas.forEach(($carta, i) =>{
    const orden = Number(ordenDeCartas[i]);
    $carta.parentNode.id = juegoDeCartas[orden].id;
    $carta.src = juegoDeCartas[orden].src;
    $carta.classList.add('girada');
})
}
