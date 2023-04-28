import { Carta } from "../models/Carta";
import { CartaView } from "./CartaView";

export class ManoJugadorCartasView {

    /** Cartas visibles en esta vista
     * @type { array<Carta> }
     */
    #cartasViews = [];
    #manoVisible
    #jugador
    #cartaSelecionada

    /** Indica la posición en la que se situarán la colección de cartas mano de un jugador
     * Deberá ser un número entre 1 y 4 (máximo de jugadores para este diseño)
     * @type {number|string} num con posibles valores 1, 2, 3 y 4
     */
    #posicionJugador = null;

    constructor(jugador, posicionjugador, visible) {
        //TODO: Construir este vista (puede que haga falta parametrizarlo)
        this.#jugador = jugador;
        this.#posicionJugador = posicionjugador;
        this.#manoVisible = visible;

    }

    _contruirVistas() {
        //TODO: Construye la CartaView de la mano de un jugador
        let mano = [];
        mano = this.#jugador.miMano;

        for (let i = 0; i < mano.length; i++) {


            let carta = new CartaView("assets/img/cartas/" + mano[i].clave + ".png", this.#manoVisible, "carta-en-mano");
            this.#cartasViews[i] = carta;

        }



    }

    /**
     * @returns boolean - True si hay alguna carta seleccionada false en caso contrario
     */
    isCartaSelected() {
        //TODO: Implementar
       
       let seleccion= Boolean;
       seleccion= false;
        let arrayCartas1 = document.getElementById('mano1');
        arrayCartas1 = arrayCartas1.querySelectorAll('img');
        arrayCartas1.forEach(cm => {
            if (cm.classList[2]=="carta-seleccionada") {
                
                seleccion= true;
            }
            
        });
       
        return seleccion;

    }

    /**
     * @returns {Carta} - Retorna carta seleccionada
     * @throws {Error} - Lanza error si no hay ninguna selección
     * @see isCartaSelected()
     */
    getModelSelection() {
        //TODO: Implementar
        
        let arrayCartasmano= document.getElementById("mano1");
        let arraymano = arrayCartasMano.querySelectorAll(' .carta-seleccionada');

    }
    getModel() {
       
        return this.#cartasViews;
        

    }

    /**
     * Selecciona o des-selecciona una carta de la mano de un juegador
     * @param {CartaView} laCartaView - carta que se quiere seleccionar/des-seleccionar
     * @returns boolean - True si queda alguna carta seleccionada; False en caso contrario
     */
    toggleSelectionCarta(laCartaView) {
        //TODO: Implementar
        laCartaView.toggleSelection();
        return this.isCartaSelected()
    }

    toogleHideCartas() {
        // TODO: Muestra/Oculta carta
    }

    hideCartas() {
        //TODO: Oculta carta
    }

    showCartas() {
        //TODO: Muestra carta
    }

    render() {
        //TODO; Manipulación del DOM para ubicación de las cartas
        if (this.#posicionJugador == 0) {
            let manoJugador = document.getElementById("mano2");
            manoJugador.innerHTML = "";
            this.#cartasViews.forEach(carta => {
                carta.render("mano2");
            });
        } else if (this.#posicionJugador == 1) {
            let manoJugador = document.getElementById("mano1");
            manoJugador.innerHTML = "";

            this.#cartasViews.forEach(carta => {
                carta.render("mano1");
            });
        }
    }
    getPosicionJugador(){
        return this.#posicionJugador;
    }
    getVisivilidadJugador(){
        return this.#manoVisible;
    }

}
