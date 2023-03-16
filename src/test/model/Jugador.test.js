// Cargo el objeto jest para hacer mocking
import { jest } from '@jest/globals';


import { BarajaEspagnola } from "../../components/models/BarajaEspagnola";
import { Juego } from "../../components/models/Juego";
import { Jugador, ReglaException } from "../../components/models/Jugador";

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
    })
});
