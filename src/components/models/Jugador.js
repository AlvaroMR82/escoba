// import { Carta } from "./Carta.js"; // Nota por qué no es necesario este import
import { Juego } from "./Juego.js"
import { Mesa } from "./Mesa.js";

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

        let añadirCartas = [];
        añadirCartas = cartas;
        añadirCartas.concat(this.mano);
        this.#mano = añadirCartas;
        return this;

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
        let mano = this.#mano;
        let manoMesa = this.#juego.mesa.mano;
        let tieneCartasCorrectas = Boolean;

        if (mano.includes(cartaMano)) {
            console.log("tengo la carta");
            cartasMesa.forEach(carta => {
                if (manoMesa.includes(carta)) {
                    console.log("la mesa contiene la carta");
                    tieneCartasCorrectas = true
                } else {
                    console.log("la mesa no contiene la carta");
                    tieneCartasCorrectas = false;
                }

            });




        } else {
            console.log("no tengo la carta");
            throw new Error('No tienes la carta');
        }

        if (tieneCartasCorrectas) {
            let cartasBaza = [];
            let escoba = Boolean;
            //Comporbamos si la jugada es una escoba y si las cartas suman 15 con la funcion de la mesa recogerBazaGanada.
            let mesa1 = this.#juego.mesa;

            escoba = mesa1.recogeBazaGanada(cartaMano, cartasMesa);

            //juntamos las cartas en un array que empieza con las cartas de la mesa y despues con la carta de la mano.    
            cartasMesa.forEach(carta => {
                cartasBaza.push(carta);
            });
            cartasBaza.push(cartaMano);
            //lo mandamos a las bazas
            this.#bazas.push({ cartasBaza, escoba });

            //eliminamos las cartas de la mesa       
            cartasMesa.forEach(carta => {
                let cartaParaQitar = carta;
                let cartaEliminada = this.#juego.mesa.mano.findIndex(carta => carta === cartaParaQitar);
                this.#juego.mesa.mano.splice(cartaEliminada, 1);
            });

            let cartaEliminada = this.#mano.findIndex(carta => carta === cartaMano);
            this.#mano.splice(cartaEliminada, 1);
            return { cartasBaza, escoba };

        }


        return { cartasBaza, escoba };
        /*
        let cartasBaza = [];
        let escoba = Boolean;
        //Comporbamos si la jugada es una escoba y si las cartas suman 15 con la funcion de la mesa recogerBazaGanada.
        let mesa1 = this.#juego.mesa;
        
        if (mesa1.recogeBazaGanada(cartaMano, cartasMesa)) {
            escoba = true;
        } else {
            escoba = false;
        }
        //juntamos las cartas en un array que empieza con las cartas de la mesa y despues con la carta de la mano.    
       cartasMesa.forEach(carta => {
        cartasBaza.push(carta);
       });
       cartasBaza.push(cartaMano);
       //lo mandamos a las bazas
       this.#bazas.push({cartasBaza,escoba});

       //eliminamos las cartas de la mesa       
       cartasMesa.forEach(carta => {
        let cartaParaQitar=carta;
        let cartaEliminada = this.#juego.mesa.mano.findIndex(carta => carta === cartaParaQitar);
        this.#juego.mesa.mano.splice(cartaEliminada, 1);
       });
       
       let cartaEliminada = this.#mano.findIndex(carta => carta === cartaMano);
       this.#mano.splice(cartaEliminada, 1);


      
        return { cartasBaza, escoba };
       
        

        //this.#juego.mesa.mano.splice(1,2);
       // this.#mano.splice(0,1);
       */
    }




    /** El jugador opta por tirar una carta de su mano sin la posibilidad de llevarse ninguna baza. La carta arrojada pasará a formar parte de la mesa
     * @param {Carta} cartaMano - Carta arrojada de la mano del jugador
    * @returns {Jugador} - la instancia del jugador
     * @throws {Error} Lanzará un error si el jugador no puede ganar la baza
     */
    arroja(cartaMano) {
        let mesa1 = this.#juego.mesa;
        mesa1.recogerCartas(cartaMano);
        let cartaEliminada = this.#mano.findIndex(carta => carta === cartaMano);
        this.#mano.splice(cartaEliminada, 1);


        return this;


    }

    // privados

}

export { Jugador }