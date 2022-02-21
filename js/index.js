import  {habilitarTablero} from './main.js'

    let reversos = []
    let cartasUsadas = [];
    let cartas = [];


// export function almacenarCartas() {
//     const $cartas = document.querySelectorAll(".carta");
//     $cartas.forEach($carta =>
//         cartas.push($carta)
//     );
//     let $reversos = document.querySelectorAll(".reverso-carta");
//     $reversos.forEach($reverso =>
//         reversos.push($reverso)
//     );
//     return;
// }

document.querySelector(".start").onclick = habilitarTablero;
