import { Jugador } from './Jugador.js';
import { Mesa } from './Mesa.js';
import { BarajaEspagnola } from './BarajaEspagnola.js';
import { Juego } from './Juego.js';
import { Carta } from './Carta.js';

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



   
   
  



