import { Juego } from '../../components/models/Juego.js'
import { Carta } from '../../components/models/Carta.js';

// Utilizadades para test
const isArrayUnique = (arr) => Array.isArray(arr) && new Set(arr).size === arr.length; // función para checkear que los elementos del array no se repiten
const printClaves = (arr) => arr.map( carta => carta.clave);

describe('SCJ - Construyendo el juego', () => {
    test('SCJ01 - Inicializado el juego con baraja (40 cartas)', () => {
        const juego = new Juego();
        expect(juego.mazo).toBeTruthy();
        expect(juego.mazo).toHaveLength(40);
    });

    test('SCJ02 - Compruebo que en el mazo están todas las cartas necesarias (baraja española)', () => {
        const juego = new Juego();
        expect(juego.mazo).toBeTruthy();
        const cartasEsperadas = new Set(['e1','e3','e2','e4','e5','e6','e7','eS','eC','eR','o1','o2','o3','o4','o5','o6','o7','oS','oC','oR','b1','b2','b3','b4','b5','b6','b7','bS','bC','bR','c1','c2','c3','c4','c5','c6','c7','cS','cC','cR']);
        const cartasGeneradas = new Set(juego.mazo.map( carta => carta.clave ));
        
        console.debug(cartasEsperadas);
        console.debug(cartasGeneradas);

        expect(cartasGeneradas).toEqual(cartasEsperadas)
    });

    test('SCJ03 - Todas las cartas del mazo tienen establecido un valor para las sumas', () => {
        const juego = new Juego();
        expect(juego.mazo).toBeTruthy();
        juego.mazo.forEach(unaCarta => {
            expect(unaCarta).toBeInstanceOf(Carta);
            expect(unaCarta.valor).toBeGreaterThanOrEqual(1);
            expect(unaCarta.valor).toBeLessThanOrEqual(10);
        });
    });

    test('SCJ04 - Todas las figuras tienen su valor adecuado a diferencia de su numeración', () => {
        const juego = new Juego();
        expect(juego.mazo).toBeTruthy();
        juego.mazo.forEach( unaCarta => {
            if(unaCarta.isFigura()){
                switch(unaCarta.numero){
                    case 10:
                        expect(unaCarta.valor).toEqual(8); // Sota
                        break;
                    case 11:
                        expect(unaCarta.valor).toEqual(9); // Sota
                        break;
                    case 12:
                        expect(unaCarta.valor).toEqual(10); // Sota
                        break;
                    default: throw "Figura con numeracion no válida"
                }
            } else{
                expect(unaCarta.valor).toEqual(unaCarta.numero);
            }
        });
    });

    test('SCJ05 - Se inicializa el juego con (por defecto) 2 jugadores', () => {
        const juego = new Juego();
        expect(juego.jugadores).toBeTruthy();
        expect(juego.jugadores).toHaveLength(2);
    });

    test('JCJ06 - estableceValorCartas() retorna la propia instancia de juego', () => {
        const juego = new Juego();
        expect(juego.estableceValorCartas()).toBe(juego);
    });

    test('JCJ07 - repartir() retorna la propia instancia de juego', () => {
        const juego = new Juego();
        expect(juego.repartir()).toBe(juego);
    })
});

describe('SPJ - Preparando el juego... Repartición', () => {

    test('SPJ01 - Cada jugador debe tener el mismo número de cartas (3)', () => {
        const juego = new Juego();
        juego.repartir();
        expect(juego.jugadores).toBeTruthy();
        expect(juego.jugadores.length).toBeGreaterThanOrEqual(2);
        juego.jugadores.forEach(unJugador => {
            expect(unJugador.miMano).toHaveLength(3);
        });
    });

    test('SPJ02 - Después de repartir checkeo si no se ha duplicado/eliminado ninguna carta del juego', () => {
        const juego = new Juego();
        expect(juego.mazo).toBeTruthy();
        const numCartas = juego.mazo.length;
        juego.repartir();

        const cartas = [];
        cartas.push(...juego.mazo);
        cartas.push(...juego.mesa.mano);
        juego.jugadores.forEach(unJugador => {
            cartas.push(...unJugador.miMano);
        });
        expect(cartas).toHaveLength(numCartas);
        expect(isArrayUnique(cartas)).toBeTruthy();
    });

    test('SPJ03 - Repartición adecuada entre jugadores. Las cartas repartidas deben corresponder a las primeras cartas del mazo', () => {
        const juego = new Juego();
        expect(juego.mazo).toBeTruthy();
        
        // Obtengo una copia del mazo de cartas (me interesa el orden)
        const mazoTest = Array.from(juego.mazo);

        // Luego hago que se repartan las cartas
        juego.repartir();

        console.debug("mazoTest === juego.mazo: ", mazoTest === juego.mazo, "(nota que testeo con una copia)");
        console.debug("Mazo de Cartas: "  , printClaves(mazoTest));
        console.debug("Cartas jugador 1: ", printClaves(juego.jugadores[0].miMano));
        console.debug("Cartas jugador 2: ", printClaves(juego.jugadores[1].miMano));

        let numCartasToCheck = 3 * juego.jugadores.length;
        let numCartasChecked = 0;
        do {
            juego.jugadores.forEach(unJugador => {
                const cartaEsperada = mazoTest.pop();
                const cartaObtenida = unJugador.miMano.shift();
                expect(cartaEsperada).toBeInstanceOf(Carta);
                expect(cartaObtenida).toBeInstanceOf(Carta);
                expect(cartaEsperada.clave).toEqual(cartaObtenida.clave);
                numCartasChecked++;
            });
        } while (numCartasToCheck < numCartasChecked);
    });

    test('SPJ04 - Chequeo que las cartas sobre la mesa se repartieron correctamente', () => {
        const juego = new Juego();
        expect(juego.mazo).toBeTruthy();

        // Obtengo una copia del mazo de cartas (me interesa el orden)
        const mazoTest = Array.from(juego.mazo);

        // Luego hago que se repartan las cartas
        juego.repartir();
        expect(juego.mesa.mano).toBeTruthy();
        expect(juego.mesa.mano).toHaveLength(4);

        let numCartasJugadores = 0;
        juego.jugadores.forEach(unJugador => {
            numCartasJugadores += unJugador.miMano.length;
        });
        console.debug("Mesa: ", printClaves(juego.mesa.mano))

        // Saco las cartas que ya han sido repartidas a los jugadores
        for (let i = 0; i < numCartasJugadores; i++) mazoTest.pop();

        const cartaEsperada = mazoTest.pop();
        const cartaObtenida = juego.mesa.mano.shift();
        expect(cartaEsperada).toBeInstanceOf(Carta);
        expect(cartaObtenida).toBeInstanceOf(Carta);
        expect(cartaEsperada.clave).toEqual(cartaObtenida.clave);

    });

    test('SPJ05 - Chequeo que el juego no está iniciado antes o después de repartir', () => {
        const juego = new Juego();
        expect(juego.isPartidaIniciada()).toBe(false);
        juego.repartir();
        expect(juego.isPartidaIniciada()).toBe(false);
    });
});

describe('SJUG - Los jugadores juegan', () => {
    test('SJUG01 - El primer jugador juega su carta y gana baza', () => {

        // FIXME: (Tarea profesor) No hacer referencias explícitas a estructuras en este test
        // TODO: (Tarea profesor) Refactorizar este test aplipando la técnica de mocking
        
        const juego = new Juego();
        juego.repartir();
        
        expect(juego.jugadores).toBeTruthy();
        expect(juego.mesa).toBeTruthy();
        expect(juego.mesa.mano).toBeTruthy();
        
        const jugador = juego.jugadores[0];
        expect(jugador).toBeTruthy();
        expect(jugador.miMano).toBeTruthy();
        expect(jugador.misBazas).toBeTruthy();
        
        // Se asume que la baraja está ordenada y sin barajar
        // Situación experada cartas jugador1: [cR, cS, c6]
        const [j1, j2, j3] = jugador.miMano;
        expect(j1.clave).toEqual('cR');
        expect(j2.clave).toEqual('cS');
        expect(j3.clave).toEqual('c6');

        // Situación experada en mesa: [c4, c3, c2, c1]
        const [m1, m2, m3, m4] = juego.mesa.mano;
        expect(m1.clave).toEqual('c4');
        expect(m2.clave).toEqual('c3');
        expect(m3.clave).toEqual('c2');
        expect(m4.clave).toEqual('c1');

        // El jugador juega su primera carta (Rey) combinando con: c3 y c2; 10+3+2=15)
        const {escoba} = jugador.juega(j1,m2,m3);

        // Compruebo que el retorno de esa función me indica que NO se hizo escoba
        expect(escoba).toBe(false);

        // En la mesa deben quedar 2 cartas (4 en reparto - 2 ganadas)
        expect(juego.mesa.mano).toHaveLength(2);

        // Las cartas que deben permanecer en mesa son c4 y c1
        console.debug("Mesa: ", printClaves(juego.mesa.mano))
        expect(juego.mesa.mano[0].clave).toEqual(m1.clave);
        expect(juego.mesa.mano[1].clave).toEqual(m4.clave);

        // Las cartas ganadas se encuentan en las bazas del jugador
        expect(jugador.misBazas).toHaveLength(1);
        expect(jugador.misBazas[0]).toEqual({
            cartasBaza: [m2,m3,j1],
            escoba: false,
        })
    });

    test('SJUG02 - Cuando el primer jugador juega su primera mano, la partida comienza', () => {
        const juego = new Juego();
        juego.repartir();
        expect(juego.jugadores).toBeTruthy();

        const jugador = juego.jugadores[0];
        expect(jugador).toBeTruthy();
        expect(jugador.miMano).toBeTruthy();
        expect(jugador.miMano[0]).toBeTruthy();

        jugador.arroja(jugador.miMano[0]);
        expect(juego.isPartidaIniciada()).toBe(true);
    });

    test('SJUG03 - Cuando el jugador arroja una carta (no quiere jugar baza), la carta debe permanecer sobre la mesa', () => {
        const juego = new Juego();
        juego.repartir();
        expect(juego.mesa).toBeTruthy();
        expect(juego.mesa.mano).toBeTruthy();

        const jugador = juego.jugadores[0];
        expect(jugador).toBeTruthy();
        expect(jugador.miMano).toBeTruthy();

        const unaCarta = jugador.miMano[0];
        expect(unaCarta).toBeTruthy();

        jugador.arroja(unaCarta);
        expect(juego.mesa.mano).toContain(unaCarta);
        console.debug(jugador.miMano.toString());
        expect(jugador.miMano).not.toContain(unaCarta);
    });
});