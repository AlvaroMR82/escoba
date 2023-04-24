import { forEach } from "underscore";
import { ManoJugadorCartasView } from "../views/ManoJugadorCartasView"
import { PilaCartasView } from "../views/PilaCartasView"

class JugadorController {

    #manoJugadorCartasView;
    #bazasCartasView;
    #mesaController;
    #jugadorModel;

    constructor(jugador, num, visible) {
        //TODO: Construir este controller (puede que haga falta parametrizarlo)
        let jug = new ManoJugadorCartasView(jugador, num, visible);
        this.#manoJugadorCartasView = jug;
        this.#jugadorModel = jugador;
    }

    // Events
    _registrarEventosManoJugador() {
        /*
        let element = document.querySelector('img[src="assets/img/cartas/cC.png"]');
element.addEventListener('click', function () {_onClickCartaManoHandler(element)});
*/  let cartasListener = [];
        cartasListener = this.#manoJugadorCartasView.getModelSelection();
        cartasListener.forEach(cartasL => {
            let Selector = "img[src='" + cartasL.getModel() + "']";
            let Elemento = document.querySelector(Selector);
            Elemento.addEventListener('click', this._onClickCartaManoHandler.bind(this, this));

        });



    }

    _desRegistrarEventosManoJugador() {
        // TODO: des-registrar eventos cartas mano
    }

    _registrarEventosMesa() {
        // TODO: registrar eventos cartas mesa
    }

    _desRegistrarEventosMesa() {
        // TODO: des-registrar eventos cartas mesa
    }

    _onClickCartaManoHandler = ({ srcElement }, element) => {
        //TODO: Implementar handler del clic (seleccionar carta) sobre una cara de la mano
       console.debug(element);
       // console.log(srcElement);
        let cartas = [];
        cartas = this.#manoJugadorCartasView.getModelSelection();
        /*
        if (element === cartas[0]) {
            console.log("son iguales");
        } else {
            console.log("no son iguales");
        }
        */
        this.#manoJugadorCartasView.toggleSelectionCarta(cartas[0]);
        this.#manoJugadorCartasView.toggleSelectionCarta(cartas[2]);
        this.#manoJugadorCartasView.toggleSelectionCarta(cartas[1]);


        // this.#manoJugadorCartasView.toggleSelectionCarta(this.#manoJugadorCartasView.getModelSelection[0]);

    }

    _onClickCartaMesaHandler = ({ srcElement }) => {
        //TODO: Implementar handler del clic (seleccionar carta) sobre una carta de la mesa
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