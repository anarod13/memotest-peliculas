import { actualizarReloj } from "./ui.js/alertas.js";

// export function activarReloj() {//ui con parámetro tiempo hacer que segs y minutos sean un em cada uno con id. la función actualizar reloj asigna directo

//         reloj = setInterval(function() {
//             let tiempoDeJuego = calcularTiempo()
//             document.querySelector("#intro-tiempo").innerText = "Llevas ";
//             document.querySelector("#tiempo").innerText = tiempoDeJuego;
//         }, 1000);
//         return;
//     }

export let reloj;
export function activarReloj(){
reloj = setInterval (function(){
    let $minutos = Number(document.querySelector("#minutos").innerText);
    let $segundos = Number(document.querySelector("#segundos").innerText);
    let tiempo = ($minutos*60)+ $segundos;
    tiempo++;
    actualizarReloj(tiempo);
    },1000)}


