import { Juego } from "./Juego.js"

class Mesa {

    // Atributos

    /** La colección de cartas representadas sobre la mesa con las que interactúan los jugadores
     * @type {array<Carta>}
     */
    #mano = [];

    #juego = null;

    // Getters y Setters
    get mano() { return this.#mano }

    // construccion

    /** Nueva mesa
     * @param {Juego} juego - instancia del juego al que pertenece esta mesa
     */
    constructor(juego) {
        if(juego && juego instanceof Juego){
            this.#juego = juego;
        } else throw new Error('No es posible construir la sin relación a un juego');
    }

    // interfaz

    /** Aportación de cartas a la mesa. Las cartas serán puestas sobre la mesa para ser jugadas
     * @param  {...Cartas} cartas
     * @returns {Mesa} La instancia de esta mesa
     */
    recogerCartas = (...cartas) => {
        //TODO: Implementa este método
        this.#mano.push(cartas);
        return this;
    }

    /** Solicitud a la mesa para recoger una baza ganada. Para ello se debe de aportar una carta perteneciente a un jugador 
     * y un conjunto de cartas sobre la mesa.
     * @param {Carta} carta 
     * @param {array<Carta>} cartasElegidas 
     * @returns {boolean} Verdadero en caso de ser una 'escoba' la baza ganada, falso en caso contrario
     * @throws {Error} Lanza un error si no es posible recoger una baza como ganada si se incumplen las normas del juego
     */
    recogeBazaGanada = (carta, cartasElegidas) => {
        //TODO: Implementa este método
        
    }

}

export { Mesa }