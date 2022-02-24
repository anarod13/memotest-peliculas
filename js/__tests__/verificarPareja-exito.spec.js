/**
 * @jest-environment jsdom
 */

import fixtureExito from "../fixtures/fixtureJuegoGanado";
import { verificarPareja } from "../verificarPareja"; 

document.body.innerHTML = fixtureExito;

jest.useFakeTimers();
jest.spyOn(global, 'clearInterval');



verificarPareja();

test('Verifica juego ganado', () =>{
    verificarPareja();
    jest.advanceTimersByTime(1000);
    expect(document.querySelector("#intro-tiempo").innerText).toEqual('Tardaste ');
    expect(document.querySelector("#estado").innerText).toEqual('Ganaste! Toca Empezar! para jugar de vuelta');
})
