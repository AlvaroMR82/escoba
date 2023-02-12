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
     
        let baraja= new BarajaEspagnola(7);
        this.#mazo = baraja.cartas;
        // Estableciendo el valor que se pretende de cada carta
     this.estableceValorCartas();

        // inicializar jugadores
        
        let jugador1 = new Jugador(this);
        let jugador2 = new Jugador(this);
        this.#jugadores[0]=jugador1;
        this.#jugadores[1]=jugador2;
        // inicializo la mesa
        this.#mesa = new Mesa(this);
      
       
        
        return this;
        this.isPartidaIniciada();
        this.repartir();
        
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
        this.#jugadores[0].recogeCartas(cartas);
         //TODO: Implementa este método
         let mazo1=this.#mazo.cartas;
         for(let i=0; i==2;i++){
           this.#jugadores[0].mano[i]=mazo1[0];
           mazo1.shift();
           this.#jugadores[1].mano[i]=mazo1[0];
           mazo1.shift();
         }
         for(let i=0; i=3;i++){
             this.#mesa.mano[i] =mazo1[0];
             mazo1.shift();
          }
 
         return this;
 
    }

    /** Establece el valor de cada carta según las reglas del juego de la escoba
    * @returns {Juego}} La instancia de este juego
     */
    estableceValorCartas = () => {
       // TODO: Implementa este método.

       let mazo1=this.#mazo;
        
     
        for(let i=0;i<mazo1.length;i++)  {  
            
  
        if(mazo1[i].numero < 10){
            mazo1[i].valor=mazo1[i].numero;
        }else{
            mazo1[i].valor=10;
        }
        }
        this.#mazo=mazo1;
  
    return this;

    }
}

export { Juego }