const URL = "http://192.168.0.131:8080";
context("Memotest", () => {
    before(() => {
        cy.visit(URL)
    });


    describe("Chequea habilitar tablero", () => {

        it("Chequea botón 'start'", () => {
            cy.get(".start").click();
            cy.get(".casilla").then((casillas) => {
                casillas.each(function(i, casilla) {
                    cy.get(casilla).find("img").should("have.length", 2);
                    cy.get(casilla).find(".carta").should("exist").and("not.be.visible");

                });
            });
            iniciarReloj();
            cy.get("#tiempo").should("not.deep.equal", 0);
        });
        it("Chequea que las cartas sean aleatorias", () => {
            let cartasOriginales = [];
            let cartasNuevas = [];
            cy.get(".carta").then((cartas) => {
                cartas.each(function(i, carta) {
                    cartasOriginales.push(carta.id);
                });

            });
            cy.get(".start").click();
            cy.get(".carta").then((cartas) => {
                cartas.each(function(i, carta) {
                    cartasNuevas.push(carta.id);
                });
            });
            cy.wrap(cartasOriginales).should("not.deep.equal", cartasNuevas);
        });


    });
    describe("Resolver juego", () => {
        const NUMERO_DE_CARTAS = 16;
        let mapaDePares;
        let cartasEnJuego = [];
        let reversos = [];
        it("Chequea que las cartas 'giren'", () => {

            cy.get(".carta").then(cartas => {
                cartas.each(function(i, carta) {
                    cartasEnJuego.push(carta);
                });
                mapaDePares = obtenerParejas(cartas);
                console.log(mapaDePares);


            });
            cy.get(".reverso-carta").then((reversosCartas) => {
                reversosCartas.each(function(i, reverso) {
                    reversos.push(reverso);
                });
                cy.get(reversos[mapaDePares[0][1]]).click();
                cy.get(reversos[mapaDePares[0][1]]).should("not.be.visible");
                cy.get(cartasEnJuego[mapaDePares[0][1]]).should("be.visible");
            });



        });
        it("Selecciona una combinación erronea", () => {
            cy.get(reversos[mapaDePares[1][1]]).click();
            cy.get(".reverso-carta").then((reversos) => {
                reversos.each((i, reverso) => {
                    cy.get(reverso).should("be.visible");
                });
            })
            cy.get(".pareja-acertada").should("have.length", 0);

        })
        it("Resuelve el juego", () => {
            mapaDePares.forEach((par, i) => {
                cy.wait(500);
                cy.get(reversos[par[0]]).click();
                cy.get(reversos[par[1]]).click();
            })
            cy.get(".pareja-acertada").should("have.length", NUMERO_DE_CARTAS);
            cy.get("#estado").contains("Ganaste! Toca ¡Empezar! para jugar de vuelta");
            cy.get("#tiempo").contains(tiempoDeJuego);
        });
    });
});

function obtenerParejas(cartas) {
    let listaDePares = {}
    cartas.each((i, carta) => {
        if (listaDePares[carta.id]) {
            listaDePares[carta.id].push(i);
        } else {
            listaDePares[carta.id] = [i];
        }

    });
    let pares = Object.values(listaDePares);

    return pares;
}
let tiempo = 0;
let tiempoDeJuego;

function iniciarReloj() {
    tiempo = 0;
    setInterval(function() {
        tiempoDeJuego = calculoDeTiempo()
    }, 1000);
    return;
}

function calculoDeTiempo() {
    tiempo++;
    let minutos = Math.floor(tiempo / 60);
    let segundos = tiempo % 60;
    return `${minutos} minutos y ${segundos} segundos jugando`;
}