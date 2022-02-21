import {asignarCartas} from './ui.js/tablero.js';
import {activarReloj} from './reloj.js'
import {habilitarSeleccion} from './ui.js/tablero.js'

let cartasEnTablero = [];
let cartasUsadas = [];
let $casillas = [];
let intentos = 0;
let tiempo = 0;





export function habilitarTablero() {
    reset();
    asignarCartas(juegoDeCartas,definirOrdenDeCartas());
    activarReloj()
    habilitarSeleccion();
    return;
}

// function buscarCarta(casilla) {
//     let i = Math.floor(Math.random() * 16);
//     let cartaAleatoria = cartas[i];
//     let cartaDisponible = cartasUsadas.every(carta => carta !== cartas.indexOf(cartaAleatoria));
//     if (cartaDisponible) {
//         return asignarCarta(casilla, cartaAleatoria);
//     } else {
//         return buscarCarta(casilla);
//     }
// }

// // function asignarCarta(casilla, cartaAsignada) {
//     cartaAsignada.classList.add("girada");
//     casilla.appendChild(cartaAsignada);
//     cartasUsadas.push(cartas.indexOf(cartaAsignada));
//     return cartasEnTablero.push(cartaAsignada);
// }



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

const juegoDeCartas = {
    0: {
        id: 'django',
        src: 'img/django.jpg'
    },
    1: {
        id: 'hateful-eight',
        src: 'img/hateful-eight.jpg'    
    },

    2: {
        id: 'jackie-brown',
        src: 'img/jackie-brown.jpg'    
    },
    3: {
        id: 'kill-bill',
        src: 'img/kill-bill.jpg'    
    },
    4: {
        id: 'once-upon-a-time-hollywood',
        src: 'img/once-upon-a-time-hollywood.jpg'    
    },
    5: {
        id: 'pulp-fiction',
        src: 'img/pulp-fiction.jpg'    
    },
    6: {
        id: 'reservoir-dogs',
        src: 'img/reservoir-dogs.jpg'    
    },
    7: {
        id: 'inglorious-basterds',
        src: 'img/inglorious-basterds.jpg'    
    },
    8: {
        id: 'django',
        src: 'img/django.jpg'
    },
    9: {
        id: 'hateful-eight',
        src: 'img/hateful-eight.jpg'    
    },
    10: {
        id: 'jackie-brown',
        src: 'img/jackie-brown.jpg'    
    },
    11: {
        id: 'kill-bill',
        src: 'img/kill-bill.jpg'    
    },
    12: {
        id: 'once-upon-a-time-hollywood',
        src: 'img/once-upon-a-time-hollywood.jpg'    
    },
    13: {
        id: 'pulp-fiction',
        src: 'img/pulp-fiction.jpg'    
    },
    14: {
        id: 'reservoir-dogs',
        src: 'img/reservoir-dogs.jpg'    
    },
    15: {
        id: 'inglorious-basterds',
        src: 'img/inglorious-basterds.jpg'    
    }
}

// const ordenCartas = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


function definirOrdenDeCartas(){
    const ordenCartas = [];
    while(ordenCartas.length<16){
        const indice = Math.floor(Math.random() * 16);
        const disponible = ordenCartas.every(carta => carta !== indice);
        if (disponible) {
             ordenCartas.push(indice);
        }
        }
return ordenCartas;

   
}
