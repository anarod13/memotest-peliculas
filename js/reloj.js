import { actualizarReloj } from "./ui.js/alertas.js";

export let reloj;
export function activarReloj(){
reloj = setInterval (function(){
    let $minutos = Number(document.querySelector("#minutos").innerText);
    let $segundos = Number(document.querySelector("#segundos").innerText);
    let tiempo = ($minutos*60)+ $segundos;
    tiempo++;
    actualizarReloj(tiempo);
    },1000)}


