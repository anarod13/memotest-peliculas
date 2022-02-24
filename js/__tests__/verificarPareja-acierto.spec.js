/**
 * @jest-environment jsdom
 */

import fixtureAcierto from "../fixtures/fixtureParejaAcertada";
import { verificarPareja } from "../verificarPareja"; 

document.body.innerHTML = fixtureAcierto;

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');



verificarPareja();


test('Verifica una pareja acertada', () =>{
    verificarPareja();
    jest.advanceTimersByTime(1000);
    expect(document.querySelectorAll('.pareja-acertada')).toHaveLength(2);
    expect(document.querySelectorAll('.seleccionada')).toHaveLength(0);
})
