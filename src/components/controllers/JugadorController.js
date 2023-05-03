import { forEach } from "underscore";
import { ManoJugadorCartasView } from "../views/ManoJugadorCartasView"
import { PilaCartasView } from "../views/PilaCartasView"
import { MesaController } from "./MesaController";
import { Juego } from "../models/Juego";

class JugadorController {

    #manoJugadorCartasView;
    #bazasCartasView;
    #mesaController;
    #jugadorModel;

    constructor(jugador, num, visible, mesaController) {
        //TODO: Construir este controller (puede que haga falta parametrizarlo)
        let jug = new ManoJugadorCartasView(jugador, num, visible);
        this.#manoJugadorCartasView = jug;
        this.#jugadorModel = jugador;
        this.#mesaController = mesaController;
        let bcv = new PilaCartasView(this.#jugadorModel.misBazas, "baza1");
        this.#bazasCartasView = bcv;
    }

    // Events
    _registrarEventosManoJugador() {
        let cartasListener = [];
        cartasListener = this.#manoJugadorCartasView.getModel();
        cartasListener.forEach(cartasL => {
            let Selector = "img[src='" + cartasL.getModel() + "']";
            let Elemento = document.querySelector(Selector);
            Elemento.addEventListener('click', this._onClickCartaManoHandler, true);
            Elemento.addEventListener('dblclick', this._onDoubleClickCartaManoHandler, true);

        });



    }

    _desRegistrarEventosManoJugador() {
        // TODO: des-registrar eventos cartas mano
        let cartasListener = [];
        cartasListener = this.#manoJugadorCartasView.getModel();
        cartasListener.forEach(cartasL => {
            let Selector = "img[src='" + cartasL.getModel() + "']";
            let Elemento = document.querySelector(Selector);
            Elemento.removeEventListener('click', this._onClickCartaManoHandler);
            Elemento.removeEventListener('dblclick', this._onDoubleClickCartaManoHandler);
        });
    }

    _registrarEventosMesa() {
       
        // TODO: registrar eventos cartas mesa
        let cartasListener = [];
        cartasListener = this.#mesaController.getCartasViews();
        cartasListener.forEach(cartasL => {
            let Selector = "img[src='" + cartasL.getModel() + "']";
            let Elemento = document.querySelector(Selector);
            Elemento.addEventListener('click', this._onClickCartaMesaHandler, true);


        });
    }

    _desRegistrarEventosMesa() {
        // TODO: des-registrar eventos cartas mesa
        let cartasListener = [];
        cartasListener = this.#mesaController.getCartasViews();
        cartasListener.forEach(cartasL => {
            let Selector = "img[src='" + cartasL.getModel() + "']";
            let Elemento = document.querySelector(Selector);
            Elemento.removeEventListener('click', this._onClickCartaMesaHandler, true);


        });
    }

    _onClickCartaManoHandler = ({ srcElement }) => {
        //TODO: Implementar handler del clic (seleccionar carta) sobre una cara de la mano
        this.#mesaController.resetSelection();
        srcElement.view.toggleSelection();

        if (this.#manoJugadorCartasView.isCartaSelected()) {
           this.#mesaController.resetSelection();
           this.#manoJugadorCartasView.getModel().forEach(carta => {
            carta.disableSelection();
        });
          srcElement.view.toggleSelection();
        }

        this.cuentaJuego();
        if (this.#manoJugadorCartasView.isCartaSelected()) {
            this._registrarEventosMesa();

        }else{
            this._desRegistrarEventosMesa();
        }

    }

    _onClickCartaMesaHandler = ({ srcElement }) => {
        //TODO: Implementar handler del clic (seleccionar carta) sobre una carta de la mesa
        let cartaView = srcElement.view;
        if (this.#manoJugadorCartasView.isCartaSelected()) {
            this.#manoJugadorCartasView.toggleSelectionCarta(cartaView);
        }
        this.cuentaJuego();
        
    }


    _onDoubleClickCartaManoHandler = ({ srcElement }) => {
        //TODO: Implementar handler del doble clic (arrojar carta) sobre una carta de la mano
        console.log("has hecho dobleclick");
        const cartaView = srcElement.view;
        let src = cartaView.getModel();
        src = src.slice(18, 20)
        let jugador = this.#jugadorModel;
        let jugadorMano = this.#jugadorModel.miMano;
        jugadorMano.forEach(carta => {
            if (carta.clave == src) {
                jugador.arroja(carta);

            }
        });

    }

    _redraw() {
        // Redibujar
        // Envía mensaje a las vistas para que se redibujen

        this.#manoJugadorCartasView._contruirVistas();
        this.#manoJugadorCartasView.render();

        let bazas = this.#jugadorModel.misBazas;
        let cartas = [];
        bazas.forEach(baza => {

            let cartasBaza = baza.cartasBaza;
            cartasBaza.forEach(element => {
                cartas.push(element);
            });
        });
        if (this.#jugadorModel.misBazas) {
            let bcv = new PilaCartasView(cartas, "baza1");
            this.#bazasCartasView = bcv;
        }
    }

    update(data) {
        //TODO: Método que recibe notficaciones del modelo (patrón observer)

        let nuevoreparto = new ManoJugadorCartasView(data.jugadores[1], this.#manoJugadorCartasView.getPosicionJugador(), this.#manoJugadorCartasView.getVisivilidadJugador());
        this.#manoJugadorCartasView = nuevoreparto;
        this.#jugadorModel = data.jugadores[1];
        this._redraw();
        this.#mesaController.redraw();
        this._registrarEventosManoJugador();
     

    }
    cuentaJuego() {

        try {
            let jugador = this.#jugadorModel;
            let cartaMano = this.#manoJugadorCartasView.getModelSelection();
            let cartasMesa = this.#mesaController.getCartasModelsSelected();
            jugador.juega(cartaMano, ...cartasMesa);

        } catch (error) {
            console.warn(error);
            this._registrarEventosManoJugador();
        }








    }


}

export { JugadorController }