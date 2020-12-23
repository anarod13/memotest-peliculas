function verificarPareja() {
    let $cartasMostradas = document.querySelectorAll(".mostrada");
    $cartasMostradas.forEach(cartaMostrada => cartaMostrada.classList.remove("mostrada"));
    cartasArriba = 0;
    if ($cartasMostradas[0].id === $cartasMostradas[1].id) {
        exito++;
        return setTimeout(anotarExito, 500);
    } else {
        return setTimeout(ocultarCartas, 1200);

    }

}

function anotarExito() {
    casillasSeleccionadas.forEach(posicion =>
        cartasEnTablero[posicion].classList.add("pareja-acertada")
    );
    habilitarSeleccion();
    return casillasSeleccionadas = [];
}

function ocultarCartas() {
    casillasSeleccionadas.forEach(posicion => {
        cartasEnTablero[posicion].classList.add("oculto");
        reversos[posicion].classList.remove("oculto");
    });
    habilitarSeleccion();
    return casillasSeleccionadas = [];
}


function mostrarTiempoDeJuego(tiempo) {
    return;
}