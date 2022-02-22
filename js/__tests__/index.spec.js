/**
 * @jest-environment jsdom
 */
import fixture from '../fixtures/fixture';
import { habilitarTablero } from '../main';
import '../index';

jest.mock('../index.js', () => jest.fn());
jest.mock('../main.js', () => jest.fn());
test('Habilita el tablero', ()=> {
    document.body.innerHTML = fixture;
    document.querySelector('.start').click();
    expect(habilitarTablero).toHaveBeenCalled();
})