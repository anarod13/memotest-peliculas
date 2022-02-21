import {asignarCartas, ocultarCartas} from './ui.js/tablero.js';
import {activarReloj} from './reloj.js'
import {habilitarSeleccion} from './ui.js/tablero.js'

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

export function habilitarTablero() {
    reset();
    asignarCartas(juegoDeCartas,definirOrdenDeCartas());
    activarReloj()
    habilitarSeleccion();
    return;
}


function reset() {
    document.querySelectorAll(".pareja-acertada").forEach(function(cartaEnTablero) {
        cartaEnTablero.classList.remove("pareja-acertada");
        });
    document.querySelectorAll('.casilla').forEach(($casilla)=>{$casilla.classList.remove('giro')})
    document.querySelector("#minutos").innerText=0;
    document.querySelector("#segundos").innerText=0;    
    document.querySelector("#estado").innerText = "";
    return;
}


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
