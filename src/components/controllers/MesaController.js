import { MesaCartasView } from "../views/MesaCartasView";
import { PilaCartasView } from "../views/PilaCartasView"

class MesaController {

    #sceneController;
    #mesaCartasView;
    #mesaTacoView;

    constructor(sceneController,juego) {
        //TODO: Construir este controller (puede que haga falta parametrizarlo)
        this.#sceneController= sceneController;
        let mcv = new MesaCartasView(juego.mesa);
         mcv._construirVistas();    
        this.#mesaCartasView=mcv;

        let mazo = new PilaCartasView(juego.mazo,"mano0");
        this.#mesaTacoView= mazo;

    }

    getCartasViews() {
        //TODO: Obtiene las vistas de las cartas sobre la mesa
      return this.#mesaCartasView.getSelection();

    }

    getCartasModelsSelected() {
        //TODO: Obtiene las cartas (models) de las cartas que han sido seleccionadas 
       // return this.#mesaCartasView.getSelection();
    }

    resetSelection() {
        //TODO: Elimina toda seleccion efectuada sobre cartas de la mesa
        let cartasMesa=[];
         cartasMesa= this.#mesaCartasView();           
            cartasMesa.forEach(carta => {
                carta.disableSelection();
            });

         
        
    }

    redraw() {
        //TODO: Envía mensaje para que todas las cartas de la mesa se redibujen
        this.#mesaCartasView.render();
    }

    update(data){
        //TODO: Método que recibe notficaciones del modelo (patrón observer)
    }
}

export { MesaController }