import { BarajaEspagnola } from './BarajaEspagnola.js'

class Carta {

    /**
     * Baraja a la que pertenece la carta
     * @type {BarajaEspagnola}
     */
    #baraja = null;     // Object

    /**
     * Valor numérico que se le puede establecer a la carta para un juego
     * @type {symbol?}
     */
    #palo   = null;     // Symbol

        /**
     * Valor numérico que se le puede establecer a la carta para un juego
     * @type {symbol?}
     */
    #figura = null;     // Symbol

    /**
     * Numeración que toma la carta en la baraja
     * @type {number?}
     */
    #num    = null;     // Number

    /**
     * Valor numérico que se le puede establecer a la carta para un juego
     * @type {number?}
     */
    #valor  = null;     // Number

    // Getters y Setters
    get clave() { return this.#figura ? `${this.#palo.description}${this.#figura.description}` : `${this.#palo.description}${this.#num}` }
    get numero() { return this.#num }
    get valor() { return this.#valor }

    set valor(num){
        if(Number.isInteger(num)){
            this.#valor = num
        } else throw new Error(`No se puede establecer el valor ${num} a la carta ${this.clave}`);
    }

    // Construccion
    constructor(baraja, symbolPalo, numValue, symbolFigura){
        this.#baraja = baraja;
        this.#palo = symbolPalo;
        this.#num = numValue;
        this.#figura = symbolFigura;
        
    }

    // Interfaz
    toString = () => this.clave;

    getCartaByClave = (clave) => this.#baraja.getCartaByClave(clave);
    isFigura = () => this.#figura != null;
    isAs = () => this.#num === 1
    isEspadas = () => this.#palo === BarajaEspagnola.Palos.Espadas;
    isOros = () => this.#palo === BarajaEspagnola.Palos.Oros;
    isBastos = () => this.#palo === BarajaEspagnola.Palos.Bastos;
    isCopas= () => this.#palo === BarajaEspagnola.Palos.Copas;

}

export { Carta }