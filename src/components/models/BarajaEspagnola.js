import { Carta } from './Carta.js'

class BarajaEspagnola {

    // Enumeraciones
    // https://www.sohamkamani.com/javascript/enums/
    // https://stackoverflow.com/questions/44425974/why-symbols-not-convert-string-implicitly

    static Palos = Object.freeze({
        Espadas: Symbol('e'),
        Oros: Symbol('o'),
        Bastos: Symbol('b'),
        Copas: Symbol('c')
    })

    static Figuras = Object.freeze({
        Sota: Symbol('S'),
        Caballo: Symbol('C'),
        Rey: Symbol('R')
    })

    // Atributos

    /**
     * Colección de cartas de la baraja
     * @type {array<Carta>}
     */
    #cartas = null;

    // Getters y Setters
    get cartas() {
        return this.#cartas;
    }

    /**
     * Construye la baraja española: https://commons.wikimedia.org/wiki/File:Baraja_española_completa.png
     * @param {number} valorMax - Indica cual es el número de carta más alto (excluyendo las figuras)
     */
    constructor(valorMax = 7) {
        if (valorMax > 9) throw new Error(`No se puede contruir la baraja con cartas de valor ${valorMax}`);

        const newBaraja = []
        // Por cada palo
        for (let unPalo of Object.values(BarajaEspagnola.Palos)) {
            for (let i = 1; i <= valorMax; i++) {
                newBaraja.push(new Carta(this, unPalo, i));
            }
            // Añado las figuras (sota, caballo, rey)
            Object.values(BarajaEspagnola.Figuras).forEach((unaFigura, idx) => newBaraja.push(new Carta(this, unPalo, idx + 10, unaFigura)));
        }
        this.#cartas = newBaraja;
    }

    // Interfaz

    /**
     * Obtiene una carta de la baraja por el valor de su clave
     * @param {string} clave - Clave de una carta. P. ejemplo: 'c3' (3 de copas)
     * @returns {Carta} La carta
     */
    cartaByClave(clave) {

        if ((typeof clave === 'string' || clave instanceof String) && clave.length == 2) {
            for (let unaCarta of this.cartas) {
                if (unaCarta.clave === clave) return unaCarta;
            }
            throw new Error(`Clave de carta no está en la baraja: ${clave}`);
        }
        else throw new Error(`Clave de carta no válida: ${clave}. Debe ser un string de 2 caracteres`);
    }

    cartasByClaves(...claves) {

        console.log(claves + "claves")
        let cartasClave = [];
        claves.forEach(clave => {

            let carta = this.cartaByClave(clave);
            if(!cartasClave.includes(carta)){
                cartasClave.push(carta)
            }
           
            
        });
        console.log(cartasClave.length   + "cartas devueltas")
        return cartasClave;
    }
}

export { BarajaEspagnola }
