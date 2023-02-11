import { Jugador } from './Jugador.js';
import { Mesa } from './Mesa.js';
import { BarajaEspagnola } from './BarajaEspagnola.js';

class Juego {

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

    // Getters y Setters
    get mazo() { return this.#mazo }
    get jugadores() { return this.#jugadores }
    get mesa() { return this.#mesa }

    /** Construye un nuevo juego con una nueva Baraja Española
     * @constructor
     */
    constructor() {
        this.init();
    }

    // Interfaz

    /** Inicializa el juego
     * @returns {Juego} - El juego inicializado
     */
    init() {
        // Construir baraja y asignarla al mazo
        // TODO: inicializa this.#mazo con una nueva baraja de cartas
        let baraja = new BarajaEspagnola;
        this.#mazo = baraja;
        // Estableciendo el valor que se pretende de cada carta
        this.estableceValorCartas();

        // inicializar jugadores
        // TODO: Crea 2 jugadores para el juego
        let jugador1 = new Jugador;
        let jugador2 = new Jugador;
        // inicializo la mesa
        // TODO: Crea una nueva mesa para el juego
        let mesa = new Mesa(this);
        return this;

    }

    /** Indica si una partida ha comenzado
     * @returns {boolean} Verdadero si comenzó Falso en caso contrario
     */
    isPartidaIniciada() {
             // TODO: Implementa este método
             if (this.init()){
                return true;
            }else{
                return false;
            }
    
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
         //TODO: Implementa este método
         for(let i=0; i=2;i++){
            jugador1.mano[i]=this.#mazo.shift();
            jugador2.mano[i]=this.#mazo.shift(); 
         }
         for(let i=0; i=3;i++){
             mesa.mano[i] =this.#mazo.shift();
          }
 
         return this;
 
    }

    /** Establece el valor de cada carta según las reglas del juego de la escoba
    * @returns {Juego}} La instancia de este juego
     */
    estableceValorCartas = () => {
       // TODO: Implementa este método.
       this.baraja.forEach(carta => {
            
            
        if(isFigura(carta)){
            if(carta.numero==10){
                carta.valor(8);
            }
            if(carta.numero==11){
                carta.valor(9);
            }
            if(carta.numero==12){
                carta.valor(10);
            }
            
        }else{

            carta.valor(carta.numero);
        }

    });
    return this;

    }
}

export { Juego }