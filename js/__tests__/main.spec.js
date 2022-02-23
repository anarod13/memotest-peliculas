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
    it('Asigna cartas en el tablero',()=>{
    cartasAsignadas.forEach(($carta)=>{expect($carta.src).not.toBe("")});
})    
    it('Reincia el juego', () => {
        document.querySelector(".start").click();
        const $parejasAcertadas = document.querySelectorAll('.pareja-acertada');
        expect($parejasAcertadas).toHaveLength(0)
    });
    
    it('Arma un juego diferente al reiniciar', () => {
        document.querySelector(".start").click();
        const cartasAsignadasB = document.querySelectorAll('.carta');
        expect(cartasAsignadasB).not.toBe(cartasAsignadas);    
    })

})