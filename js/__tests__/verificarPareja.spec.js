/**
 * @jest-environment jsdom
 */

import fixture from "../fixtures/fixtureParejaAcertada";
import { verificarPareja } from "../verificarPareja"; 
import { manejarJugada } from "../manejarJugada";

jest.mock('../manejarJugada')
document.body.innerHTML = fixture;

// jest.useFakeTimers();
// jest.spyOn(global, 'setTimeout');

// const $reversoCartas = document.querySelectorAll('.reverso-carta');
// $reversoCartas.forEach(reverso => reverso.addEventListener("click", manejarJugada, true));

beforeEach(()=>{
    jest.setTimeout(3000);
})
// $reversoCartas[2].click();
// $reversoCartas[4].click();
verificarPareja();

test('Verifica una pareja acertada', () =>{
      expect(document.querySelectorAll('.pareja-acertada')).toHaveLength(2);
      expect(document.querySelectorAll('.seleccionada')).toHaveLength(2);
})
