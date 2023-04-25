import { forEach } from "underscore";
import { ManoJugadorCartasView } from "../views/ManoJugadorCartasView"
import { PilaCartasView } from "../views/PilaCartasView"

class JugadorController {

    #manoJugadorCartasView;
    #bazasCartasView;
    #mesaController;
    #jugadorModel;

    constructor(jugador, num, visible,mesaController) {
        //TODO: Construir este controller (puede que haga falta parametrizarlo)
        let jug = new ManoJugadorCartasView(jugador, num, visible);
        this.#manoJugadorCartasView = jug;
        this.#jugadorModel = jugador;
        this.#mesaController=mesaController;
    }

    // Events
    _registrarEventosManoJugador() {
        let cartasListener = [];
        cartasListener = this.#manoJugadorCartasView.getModelSelection();
        cartasListener.forEach(cartasL => {
            let Selector = "img[src='" + cartasL.getModel() + "']";
            let Elemento = document.querySelector(Selector);
            Elemento.addEventListener('click', this._onClickCartaManoHandler.bind({srcElement:Elemento}));

        });



    }

    _desRegistrarEventosManoJugador() {
        // TODO: des-registrar eventos cartas mano
    }

    _registrarEventosMesa() {
        // TODO: registrar eventos cartas mesa
        let cartasListener = [];
        cartasListener = this.#mesaController.getCartasModelsSelected();
        cartasListener.forEach(cartasL => {
            let Selector = "img[src='" + cartasL.getModel() + "']";
            let Elemento = document.querySelector(Selector);
            Elemento.addEventListener('click', this._onClickCartaMesaHandler.bind({srcElement:Elemento}));

        });
    }

    _desRegistrarEventosMesa() {
        // TODO: des-registrar eventos cartas mesa
    }

    _onClickCartaManoHandler = ({ srcElement }) => {
        //TODO: Implementar handler del clic (seleccionar carta) sobre una cara de la mano
     
        let src=srcElement.src.slice(22,46);
        let cartas = [];
        cartas = this.#manoJugadorCartasView.getModelSelection();
        for (let i = 0; i < cartas.length; i++) {
            if (src == cartas[i].getModel()) {
                // carta.toggleSelectionCarta(this);
                 this.#manoJugadorCartasView.toggleSelectionCarta(cartas[i]);
                 this.#manoJugadorCartasView.isCartaSelected(true);
             } 
            
        }


     
       


        // this.#manoJugadorCartasView.toggleSelectionCarta(this.#manoJugadorCartasView.getModelSelection[0]);

    }

    _onClickCartaMesaHandler = ({ srcElement }) => {
        //TODO: Implementar handler del clic (seleccionar carta) sobre una carta de la mesa
        let src=srcElement.src.slice(22,46);
        let cartas = [];
        cartas = this.#mesaController.getCartasModelsSelected();
        for (let i = 0; i < cartas.length; i++) {
            if (src == cartas[i].getModel()) {
                // carta.toggleSelectionCarta(this);
                 this.#manoJugadorCartasView.toggleSelectionCarta(cartas[i]);
             } 
            
        }
    }


    _onDoubleClickCartaManoHandler = ({ srcElement }) => {
        //TODO: Implementar handler del doble clic (arrojar carta) sobre una carta de la mano
    }

    _redraw() {
        // Redibujar
        // Envía mensaje a las vistas para que se redibujen
        this.#manoJugadorCartasView._contruirVistas();
        this.#manoJugadorCartasView.render();
    }

    update() {
        //TODO: Método que recibe notficaciones del modelo (patrón observer)
    }

}

export { JugadorController }