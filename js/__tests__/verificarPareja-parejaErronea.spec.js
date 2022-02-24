/**
 * @jest-environment jsdom
 */

import fixtureErronea from "../fixtures/fixtureParejaErronea";
import { verificarPareja } from "../verificarPareja"; 

document.body.innerHTML = fixtureErronea;

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');



verificarPareja();


test('Verifica una pareja equivocada', () =>{
    verificarPareja();
    jest.advanceTimersByTime(1600);
    expect(document.querySelectorAll('.pareja-acertada')).toHaveLength(0);
    expect(document.querySelectorAll('.seleccionada')).toHaveLength(0);
    expect(document.querySelectorAll('.giro')).toHaveLength(0);

})
