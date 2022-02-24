/**
 * @jest-environment jsdom
 */

import fixture from "../fixtures/fixtureParejaAcertada";
import { verificarPareja } from "../verificarPareja"; 

document.body.innerHTML = fixture;

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');



verificarPareja();


test('Verifica una pareja acertada', () =>{
    verificarPareja();

    expect(document.querySelectorAll('.pareja-acertada')).toHaveLength(2);
      expect(document.querySelectorAll('.seleccionada')).toHaveLength(0);
})
