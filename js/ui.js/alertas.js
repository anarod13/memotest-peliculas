export function actualizarEstado(intentos = '') {
    let estado;

    if (intentos === "exito") {
        estado = "Ganaste! Toca Empezar! para jugar de vuelta"
        document.querySelector("#estado").innerText = estado;
        } else {
          intentos = Number(document.querySelector('#estado').textContent)
          intentos++
          let estado = intentos;
          document.querySelector("#estado").innerText = estado;}
    
    return;
}


export function actualizarReloj(tiempo){
        let minutos = Math.floor(tiempo / 60);
        let segundos = tiempo % 60;
        document.querySelector("#intro-tiempo").innerText = "Llevas ";
        document.querySelector("#minutos").innerText = minutos
        document.querySelector("#segundos").innerText= segundos;     
    return;   
}
