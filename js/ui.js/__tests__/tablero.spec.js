/**
 * @jest-environment jsdom
 */

import fixture from "../../fixtures/fixture";
import { manejarJugada } from "../../manejarJugada";
import {bloquearSeleccion, habilitarSeleccion, ocultarCartas} from '../tablero'

jest.mock('../../manejarJugada')
document.body.innerHTML = fixture;


const $reversoCartas = document.querySelectorAll('.reverso-carta');

$reversoCartas.forEach(reverso => reverso.addEventListener("click", manejarJugada, true));


test('Bloquea la selección de cartas', () =>{
    $reversoCartas.forEach(reverso => reverso.addEventListener("click", manejarJugada, true));
    bloquearSeleccion();
    expect(manejarJugada).not.toHaveBeenCalled();
})

test('Habilita selección de cartas',()=>{
    habilitarSeleccion();
    $reversoCartas[3].click();
    expect(manejarJugada).toHaveBeenCalledTimes(1)
})

test('Voltea las cartas', () => {
    ocultarCartas();
    expect(document.querySelectorAll(".seleccionada")).toHaveLength(0);
    expect(document.querySelectorAll(".giro")).toHaveLength(0);
})

