// import { Carta } from "./Carta.js"; // Nota por qué no es necesario este import
import { Juego } from "./Juego.js"

class Jugador {

    // Atributos

    /** La colección de cartas que irá ganando el jugador formarán sus bazas
     * @type {array<Carta>}
     */
    #bazas = [];

    /** La colección de cartas con las que jugará el jugador formarán su mano
     * @type {array<Carta>}
     */
    #mano = [];

    /** Instancia del juego al que está jugando el jugador
     * @type {Juego}
     */
    #juego = null;

    // Getters y Setters
    get miMano() { return this.#mano }
    get misBazas() { return this.#bazas }

    // construccion

    /** Nuevo jugador
     * @param {Juego} juego - instancia del juego al que jugará el jugador
     */
    constructor(juego) {
        if (juego && juego instanceof Juego) {
            this.#juego = juego;
        } else throw new Error('No es posible construir un jugador sin relación a un juego');
    }

    // interfaz

    /** El jugador recibe la/s carta/s que formarán parte de su mano
     * @param  {...Carta} cartas 
     * @returns {Jugador} - la instancia del jugador
     */
    recogerCartas = (...cartas) => {
        // TODO: Implementa este método
    }

    /**
     * @typedef {Object} Baza
     * @property {array<Carta>} cartasBaza - Colección de cartas ganas. La carta de la mano del jugador será la última
     * @property {boolean} escoba - Verdadero si hecho 'escoba', falso en caso contrario
     */
    /** El jugador opta a ganar una baza jugando su mano con las cartas de la mesa
     * @param {Carta} cartaMano - Carta en la mano del jugador que quiere jugar para sumar
     * @param  {...Carta} cartasMesa - Carta/s de la mesa que el jugador opta a ganar
     * @returns {Baza} Baza ganada
     * @throws {Error} Lanzará un error si el jugador no puede ganar la baza
     */
    juega(cartaMano, ...cartasMesa) {
       // TODO: Implementa este método
    }

    /** El jugador opta por tirar una carta de su mano sin la posibilidad de llevarse ninguna baza. La carta arrojada pasará a formar parte de la mesa
     * @param {Carta} cartaMano - Carta arrojada de la mano del jugador
    * @returns {Jugador} - la instancia del jugador
     * @throws {Error} Lanzará un error si el jugador no puede ganar la baza
     */
    arroja(cartaMano) {
        // TODO: Implementa este método
    }

    // privados

}

export { Jugador }