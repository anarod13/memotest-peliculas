/**
 * @jest-environment jsdom
 */

import fixture from "../../fixtures/fixture";
import { actualizarReloj, actualizarEstado } from "../alertas";

document.body.innerHTML = fixture

describe('Actualiza estado', () => {
    it('Actualiza número de intentos', () => {
        actualizarEstado();
        expect(document.querySelector("#estado").innerText).toBe(1)
    })
    it('Actualiza estado al ganar', () => {
        actualizarEstado('exito');
        expect(document.querySelector("#estado").innerText).toBe('Ganaste! Toca Empezar! para jugar de vuelta')
    })
})

test('Actualiza el reloj', () =>{
actualizarReloj(420);
expect(document.querySelector('#segundos').innerText).toBe(0);
expect(document.querySelector('#minutos').innerText).toBe(7);    
})