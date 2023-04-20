import { ManoJugadorCartasView } from "../views/ManoJugadorCartasView"
import { PilaCartasView } from "../views/PilaCartasView"

class JugadorController {

    #manoJugadorCartasView;
    #bazasCartasView;
    #mesaController;
    #jugadorModel;

    constructor() {
        //TODO: Construir este controller (puede que haga falta parametrizarlo)
    }

    // Events
    _registrarEventosManoJugador() {
        // TODO: registrar eventos cartas mano
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

    _onClickCartaManoHandler = ( { srcElement } ) => {
        //TODO: Implementar handler del clic (seleccionar carta) sobre una carta de la mano
    }

    _onClickCartaMesaHandler = ( { srcElement } ) => {
        //TODO: Implementar handler del clic (seleccionar carta) sobre una carta de la mesa
    }


    _onDoubleClickCartaManoHandler = ( { srcElement } ) => {
        //TODO: Implementar handler del doble clic (arrojar carta) sobre una carta de la mano
    }

    _redraw(){
        // Redibujar
        // Envía mensaje a las vistas para que se redibujen
    }

    update(){
        //TODO: Método que recibe notficaciones del modelo (patrón observer)
    }

}

export { JugadorController }