/**
 * @jest-environment jsdom
 */

 import fixture from "../fixtures/fixture";
 import { activarReloj, reloj } from "../reloj";

 jest.useFakeTimers();
 jest.spyOn(global, 'setInterval');

 document.body.innerHTML = fixture;
 activarReloj()
 test('Activa el reloj', () => {

    expect(reloj).toBeDefined();
    expect(setInterval).toHaveBeenCalledTimes(1);
})

test('Pasa el tiempo', async () => {
    const tiempoInicial =  340;
    expect(reloj).toBeGreaterThan(tiempoInicial);
  });

  afterEach(() => {
    jest.useRealTimers();
  });