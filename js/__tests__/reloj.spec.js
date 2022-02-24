/**
 * @jest-environment jsdom
 */

 import fixture from "../fixtures/fixture";
 import { activarReloj, reloj} from "../reloj";


 jest.spyOn(global, 'setInterval');

 document.body.innerHTML = fixture;
 activarReloj()
 test('Activa el reloj', () => {
    expect(reloj).toBeDefined();
    expect(setInterval).toHaveBeenCalledTimes(1);
})

test('Pasa el tiempo', async () => {
  jest.useFakeTimers();  

    jest.setTimeout(() => {
      const $reloj = document.querySelector('#segundos').innerText;
      expect($reloj).toEqual(45);
        
    }, 5000);
  });

  afterEach(() => {
    jest.useRealTimers();
  });