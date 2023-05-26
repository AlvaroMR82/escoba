// Cargo el objeto jest para hacer mocking
import { jest } from '@jest/globals';


import { BarajaEspagnola } from "../../components/models/BarajaEspagnola";
import { Juego } from "../../components/models/Juego";
import { Jugador } from "../../components/models/Jugador";
import { ReglaException } from "../../components/models/ReglaException"

// Se importan los test-cases de bazas pre-establecidas
import { 
    test_case_01, 
    test_case_02,
    test_case_03,
    test_case_04,
    test_case_05,
} from './seeds_tests_cases/index.js'

describe('JUG - Construyendo el juego', () => {

    test('JUG01 - constructor - construye una instancia de jugador sin refeferencia a un juego', () => {
        try {
            new Juego();
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
            expect(e.message).toBe('No es posible construir un jugador sin relación a un juego');
        }
    });

    test('JUG02 - recogerCartas', () => {

        const baraja = new BarajaEspagnola();
        const juego = new Juego();

        const [ c1, c2, c3 ] = [
            baraja.cartaByClave('e1'),
            baraja.cartaByClave('e2'),
            baraja.cartaByClave('e3'),
        ];

        const jugador = new Jugador(juego);
        jugador.recogerCartas(c1, c2, c3);

        expect(jugador.miMano).toStrictEqual([c1,c2,c3]);
    });

    test('JUG03 - juega() - juega una mano que no está en la mano del jugador', () => {
        const baraja = new BarajaEspagnola();
        const juego = new Juego();

        const sieteVelo = baraja.cartaByClave('o7');
        const sota = baraja.cartaByClave('oS');

        const jugador = new Jugador(juego);
        jugador.recogerCartas(
            baraja.cartaByClave('e1'),
            baraja.cartaByClave('e2'),
            baraja.cartaByClave('e3'),
        );
        
        expect( 
            () => jugador.juega(sieteVelo, sota) 
        ).toThrow(new ReglaException(`No es posible jugar la carta: ${sieteVelo.clave}`));
    });

    test('JUG03 - arroja() - juega una mano que no está en la mano del jugador', () => {
        const baraja = new BarajaEspagnola();
        const juego = new Juego();

        const sieteVelo = baraja.cartaByClave('o7');

        const jugador = new Jugador(juego);
        jugador.recogerCartas(
            baraja.cartaByClave('e1'),
            baraja.cartaByClave('e2'),
            baraja.cartaByClave('e3'),
        );
        
        expect( 
            () => jugador.arroja(sieteVelo) 
        ).toThrow(new ReglaException(`No es posible arrojar la carta: ${sieteVelo.clave}`));
    });
});

describe('PTOS - Diferentes jugadores cuantan sus puntos en base a diferentes bazas pre-cargadas', () => {

    test('PTOS00 - Test Simple. Contar puntos de la baza de Juan. No ganó bazas.', () => {
        
        // Se crea el jugador
        const juan   = new Jugador(new Juego(), 'juan');
        
        // Monto un mock de la propiedad misBazas (simulo el comportamiento de Juan cuando va a recuperar sus bazas)
        const spyProp = jest.spyOn(juan, 'misBazas', 'get');

        // 'Engaño a Juan para que tome las bazas que yo le estoy 'inyectando' en este test
        spyProp.mockReturnValue(test_case_01);

        // Pido a juan que cuente sus puntos
        expect(juan.contarMisPuntos().puntosTotales).toBe(0);

        // Compruebo que Juan consulta sus bazas
        expect(spyProp).toHaveBeenCalled();
    });

    // Más Test Cases
    const lucas  = new Jugador(new Juego(), 'lucas');  // test_case_01.json 
    const marcos = new Jugador(new Juego(), 'marcos'); // test_case_02.json 
    const pablo  = new Jugador(new Juego(), 'pablo');  // test_case_03.json
    const pedro  = new Jugador(new Juego(), 'pedro');  // test_case_04.json

    test.each([
        //               puntosTotales , cartas,sietes, velo ,oros , escobas
        [1, lucas , test_case_02,   1  ,  3    ,   0  ,   0  ,  1  ,   1],
        [2, marcos, test_case_03,   2  ,  5    ,   3  ,   1  ,  2  ,   0],
        [3, pablo , test_case_04,   0  ,  20   ,   0  ,   0  ,  5  ,   0],
        [4, pedro , test_case_05,   5  ,  24   ,   1  ,   1  ,  6  ,   2],
    ])('PTOS0%i - Se espera que %s (%i) tenga %i puntos', (numTest, jugador, bazaTest, totalPuntos, cartas, sietes, velo, oros, escobas) => {

        // Monto un mock de la propiedad misBazas
        const spyProp = jest.spyOn(jugador, 'misBazas', 'get');

        // Configuro el mock para que retorne las bazas del test_case
        spyProp.mockReturnValue(bazaTest);

        // Checkeo que el comportamiento del jugador es el adecuado
        expect(jugador.contarMisPuntos().puntosTotales).toBe(totalPuntos);
        expect(jugador.contarMisPuntos().cartas).toBe(cartas);
        expect(jugador.contarMisPuntos().sietes).toBe(sietes);
        expect(jugador.contarMisPuntos().velo).toBe(velo);
        expect(jugador.contarMisPuntos().oros).toBe(oros);
        expect(jugador.contarMisPuntos().escobas).toBe(escobas);
    });
});
