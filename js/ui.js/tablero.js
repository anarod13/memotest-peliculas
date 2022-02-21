import { manejarJugada } from "../manejarJugada.js";

export function habilitarSeleccion() {

    document.querySelectorAll('.reverso-carta').forEach(reverso => reverso.addEventListener("click", manejarJugada, true));
return;
}

export function bloquearSeleccion() {
    document.querySelectorAll('.reverso-carta').forEach(reverso => reverso.removeEventListener("click", manejarJugada, true));
    return;
}

export function ocultarCartas() {// casillasSeleccionadas for Each casilla.parentNode classlist.remove 'giro'
    casillasSeleccionadas.forEach(posicion => {
        $casillas[posicion].classList.remove("giro");
    });
    habilitarSeleccion();
    return casillasSeleccionadas = [];
}

export function asignarCartas(juegoDeCartas, ordenDeCartas){
    const $cartas = document.querySelectorAll('.carta');
    $cartas.forEach(($carta, i) =>{
    const orden = Number(ordenDeCartas[i]);
    $carta.id = juegoDeCartas[orden].id;
    $carta.src = juegoDeCartas[orden].src;
    $carta.setAttribute('index', i);
    $carta.classList.add('girada');
})
}

// const juegoDeCartas = {
//     0: {
//         id: 'django',
//         src: '.../img/django.jpg'
//     },
//     1: {
//         id: 'hateful-eight',
//         src: '.../img/hateful-eight'    
//     },

//     2: {
//         id: 'jackie-brown',
//         src: '.../img/jackie-brown'    
//     },
//     3: {
//         id: 'kill-bill',
//         src: '.../img/kill-bill'    
//     },
//     4: {
//         id: 'once-upon-a-time-hollywood',
//         src: '.../img/once-upon-a-time-hollywood'    
//     },
//     5: {
//         id: 'pulp-fiction',
//         src: '.../img/pulp-fiction'    
//     },
//     6: {
//         id: 'reservoir-dogs',
//         src: '.../img/reservoir-dogs'    
//     },
//     7: {
//         id: 'inglorious-basterds',
//         src: '.../img/inglorious-basterds'    
//     },
//     8: {
//         id: 'django',
//         src: '.../img/django.jpg'
//     },
//     9: {
//         id: 'hateful-eight',
//         src: '.../img/hateful-eight'    
//     },

//     10: {
//         id: 'jackie-brown',
//         src: '.../img/jackie-brown'    
//     },
//     11: {
//         id: 'kill-bill',
//         src: '.../img/kill-bill'    
//     },
//     12: {
//         id: 'once-upon-a-time-hollywood',
//         src: '.../img/once-upon-a-time-hollywood'    
//     },
//     13: {
//         id: 'pulp-fiction',
//         src: '.../img/pulp-fiction'    
//     },
//     14: {
//         id: 'reservoir-dogs',
//         src: '.../img/reservoir-dogs'    
//     },
//     15: {
//         id: 'inglorious-basterds',
//         src: '.../img/inglorious-basterds'    
//     },
// }