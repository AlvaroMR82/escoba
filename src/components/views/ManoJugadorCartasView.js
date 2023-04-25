import { Carta } from "../models/Carta";
import { CartaView } from "./CartaView";

export class ManoJugadorCartasView {

    /** Cartas visibles en esta vista
     * @type { array<Carta> }
     */
    #cartasViews = [];
    #manoVisible
    #jugador

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
    isCartaSelected(seleccionada) {
        //TODO: Implementar

        return seleccionada;
    }

    /**
     * @returns {Carta} - Retorna carta seleccionada
     * @throws {Error} - Lanza error si no hay ninguna selección
     * @see isCartaSelected()
     */
    getModelSelection() {
        //TODO: Implementar
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
            this.#cartasViews.forEach(carta => {
                carta.render("mano2");
            });
        } else if (this.#posicionJugador == 1) {
            this.#cartasViews.forEach(carta => {
                carta.render("mano1");
            });
        }
    }
}
