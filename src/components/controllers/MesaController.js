import { MesaCartasView } from "../views/MesaCartasView";
import { PilaCartasView } from "../views/PilaCartasView"

class MesaController {

    #sceneController
    #mesaCartasView
    #mesaTacoView

    constructor(sceneController, juego) {
        //TODO: Construir este controller (puede que haga falta parametrizarlo)
    }

    getCartasViews() {
        //TODO: Obtiene las vistas de las cartas sobre la mesa
    }

    getCartasModelsSelected() {
        //TODO: Obtiene las cartas (models) de las cartas que han sido seleccionadas 
    }

    resetSelection() {
        //TODO: Elimina toda seleccion efectuada sobre cartas de la mesa
    }

    redraw() {
        //TODO: Envía mensaje para que todas las cartas de la mesa se redibujen
        
    }

    update(data){
        //TODO: Método que recibe notficaciones del modelo (patrón observer)
    }
}

export { MesaController }