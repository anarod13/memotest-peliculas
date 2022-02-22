/**
 * @jest-environment jsdom
 */

import fixture from "../fixtures/fixture";
import { habilitarTablero} from "../main";

document.body.innerHTML = fixture

test('Habilita el tablero', () => {
    document.querySelector(".start").onclick = habilitarTablero;
    document.querySelector(".start").click();
    const cartasAsignadas = document.querySelectorAll('.carta');
    cartasAsignadas.forEach(($carta)=>{expect($carta.src).not.toBe("")});    
})