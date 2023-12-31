import { Jugador } from './Jugador.js';
import { Mesa } from './Mesa.js';
import { BarajaEspagnola } from './BarajaEspagnola.js';
import _ from 'underscore'


class Juego {

    #observers = [];

    // Atributos

    /** Representa la colección de cartas que se van a poner en juego (repartir)
     * @type {array<Carta>}
     */
    #mazo = null;

    /** Colección de jugadores que están jugando al juego
     * @type {array<Jugador>}
     */
    #jugadores = [];

    /** Representa mano o colección de cartas que se encuentran sobre la mesa la mesa
     * @type {Mesa}
     */
    #mesa = null;

    #ultimoJugador;
    #juegoTerminado = Boolean;
    #puntosJ1;
    #puntosJ2;

    turno = 0;

    // Getters y Setters
    get mazo() { return this.#mazo }
    get jugadores() { return this.#jugadores }
    get mesa() { return this.#mesa }
    get juegoTerminado() { return this.#juegoTerminado }
    get puntosJ1() { return this.#puntosJ1 }
    get puntosJ2() { return this.#puntosJ2 }
    /** Construye un nuevo juego con una nueva Baraja Española
     * @constructor
     */
    constructor(barajar) {
        this.init(barajar);
        this.turno = 0;
        this.#juegoTerminado = false;
    }

    // Interfaz

    /** Inicializa el juego
     * @returns {Juego} - El juego inicializado
     */
    init(barajar = false) {
        // Construir baraja y asignarla al mazo

        let baraja = new BarajaEspagnola();
        this.#mazo = baraja.cartas;

        if (barajar) {
            this.#mazo = this.barajar();
        }

        // Estableciendo el valor que se pretende de cada carta
        this.estableceValorCartas();

        // inicializar jugadores

        let jugador1 = new Jugador(this);
        let jugador2 = new Jugador(this);
        this.#jugadores[0] = jugador1;
        this.#jugadores[1] = jugador2;
        // inicializo la mesa
        this.#mesa = new Mesa(this);
        this.isPartidaIniciada();
        return this;


    }

    /** Indica si una partida ha comenzado
     * @returns {boolean} Verdadero si comenzó Falso en caso contrario
     */
    isPartidaIniciada() {
        let jugador = this.#jugadores[0];
        let mano = [];
        mano = jugador.miMano;

        if (mano.length == 2) {
            return true;

        }

        return false;


    }


    // Métodos privados

    /** Comienza la repartición de cartas entre los jugadores y la mesa.
     * La forma de repartir las cartas del mazo tendrá que ser rigurosamente la siguiente.
     * Se reparten las cartas primero a los jugadores. Cada jugador recibirá las cartas de una en una.
     * Es decir, cada jugador recibe una carta. Cuando los jugadores tengan todos una carta,
     * se les repartirá la segunda y así sucesivamente. Por último, se repartirá a la mesa las cuatro
     * cartas siguientes del mazo.
     * @returns {Juego}} La instancia de este juego
     */
    repartir = () => {

        /*Solucion inicial
        let mazo1 = this.#mazo;
        let jugador1 = this.#jugadores[0];
        let jugador2 = this.#jugadores[1];
        let mesa1 = this.#mesa;
        let mj1 = [];

        for (let i = 0; i < 10; i++) {
            mj1.push(mazo1.pop());

        }


        jugador1.recogerCartas(mj1[0], mj1[2], mj1[4]);
        jugador2.recogerCartas(mj1[1], mj1[3], mj1[5]);
        mesa1.recogerCartas(mj1[6], mj1[7], mj1[8], mj1[9]);

    }
*/
        //solucion refactorizada
        let mazo = this.#mazo;
        let mano1 = this.#jugadores[0].miMano;
        let mano2 = this.#jugadores[1].miMano;
        let manoMesa = this.#mesa.mano;

        for (let i = 0; i <= 2; i++) {
            mano1.push(mazo.pop());
            mano2.push(mazo.pop());
        }
        for (let i = 0; i <= 3; i++) {
            manoMesa.push(mazo.pop());

        }

        return this;
    }


    /** Establece el valor de cada carta según las reglas del juego de la escoba
    * @returns {Juego}} La instancia de este juego
     */
    estableceValorCartas = () => {

        let mazo1 = this.#mazo;
        /* Solucion inicial usando el codigo de la carta
                mazo1.forEach(carta => {
                    let valor = carta.toString();
                    let vF = valor[1];
                    if (vF == 'C' | vF == 'R' | vF == 'S') {
                        if (vF == "S") {
                            carta.valor = 8;
                        } else if (vF == "C") {
                            carta.valor = 9;
                        } else if (vF == "R") {s
                            carta.valor = 10;
                        }
                    } else {
                        carta.valor = parseInt(vF);
                    }       
                });
        
        */
        // solucion mejorada con funcion isFigura
        let baraja = [];
        baraja = this.#mazo;
        baraja.forEach(carta => {
            if (carta.isFigura()) {
                carta.valor = parseInt((carta.numero - 2));
            } else {
                carta.valor = parseInt(carta.numero);
            }
        });



        return this;

    }
    //el juego baraja el mazo
    barajar() {
        let barajada = _.shuffle(this.#mazo);

        return barajada;
    }
    //Se añaden observadores
    addObserver(observer) {
        this.#observers.push(observer)
    }
     //Se quitan observadores
    removeObserver(observer) {
        this.#observers = this.#observers.filter(e => e != 0);
    }
     //Se notifican los cambios a los observadores
    notificar() {
        this.#observers.forEach(observer => {
            observer.update(this);
        });
        console.log(this.turno);
    }

    repartirManos = () => {
        let mazo = this.#mazo;

        if (this.#mazo.length != 0) {

            let mano1 = this.#jugadores[0].miMano;
            let mano2 = this.#jugadores[1].miMano;


            for (let i = 0; i <= 2; i++) {
                mano1.push(mazo.pop());
                mano2.push(mazo.pop());
            }
        }
        return this;
    }
//se memoriza quien es el ultimo jugador en coger una baza
    ultimoJugador(jugador) {
        this.#ultimoJugador = jugador;

    }
//cuando es la ulima jugada el jugador que se llevo la ultima baza recoge las cartas de la mesa
    ultimaJugada() {
        if (this.#ultimoJugador != null && this.#ultimoJugador != undefined) {
            this.#ultimoJugador.ultimaMano();
        }
    }
//cada jugador cuenta sus puntos se da la partida por terminada y se lo comunica a los observadores.    
    contartPuntos() {

        this.#puntosJ1 = this.#jugadores[0].contarMisPuntos();
        this.#puntosJ2 = this.#jugadores[1].contarMisPuntos();


        this.#juegoTerminado = true;
        this.notificar();
    }

}

export { Juego }