/**
 * @jest-environment jsdom
 */

import fixture from "../fixtures/fixture";
import { habilitarTablero} from "../main";

document.body.innerHTML = fixture

describe('Habilita el tablero', () => {
    document.querySelector(".start").onclick = habilitarTablero;
    document.querySelector(".start").click();
    const cartasAsignadas = document.querySelectorAll('.carta');
    test('Asigna cartas en el tablero',()=>{
    cartasAsignadas.forEach(($carta)=>{expect($carta.src).not.toBe("")});    
})})