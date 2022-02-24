/**
 * @jest-environment jsdom
 */

 import fixtureTableroHabilitado from "../fixtures/fixtureTableroHabilitado";
 import { manejarJugada } from "../manejarJugada";
 import { actualizarEstado } from "../ui.js/alertas";
 import { verificarPareja} from '../verificarPareja';
 
 jest.mock('../ui.js//alertas') 
jest.mock('../verificarPareja')

 document.body.innerHTML = fixtureTableroHabilitado;
 
 const $reversoCartas = document.querySelectorAll('.reverso-carta');
 $reversoCartas.forEach(reverso => reverso.addEventListener("click", manejarJugada, true));
 
 
 
 describe('Maneja jugada', () =>{
    $reversoCartas[2].click();
    it('Maneja selección de 1 carta', () =>{
        expect(document.querySelectorAll('.giro')).toHaveLength(1);
        expect(document.querySelectorAll('.seleccionada')).toHaveLength(1);

    })

    it('Maneja selección de 2 cartas',() => {
        $reversoCartas[5].click();
        expect(document.querySelectorAll('.giro')).toHaveLength(2);
        expect(document.querySelectorAll('.seleccionada')).toHaveLength(2);
        expect(actualizarEstado).toHaveBeenCalledTimes(1);
         expect(verificarPareja).toHaveBeenCalledTimes(1);
    })    
 })