function verificarPareja() {
    let $cartasMostradas = document.querySelectorAll(".mostrada");
    $cartasMostradas.forEach(cartaMostrada => cartaMostrada.classList.remove("mostrada"));
    cartasArriba = 0;
    if ($cartasMostradas[0].id === $cartasMostradas[1].id) {
        aciertos++;
        chequearExito();
        return setTimeout(anotarAcierto, 500);
    } else {
        return setTimeout(ocultarCartas, 1200);
    }
}

function anotarAcierto() {
    casillasSeleccionadas.forEach(posicion =>
        cartasEnTablero[posicion].classList.add("pareja-acertada")
    );
    habilitarSeleccion();
    return casillasSeleccionadas = [];
}

function ocultarCartas() {
    casillasSeleccionadas.forEach(posicion => {
        $casillas[posicion].classList.remove("giro");
    });
    habilitarSeleccion();
    return casillasSeleccionadas = [];
}