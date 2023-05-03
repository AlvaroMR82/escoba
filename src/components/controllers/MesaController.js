import { forEach } from "underscore";
import { CartaView } from "../views/CartaView";
import { MesaCartasView } from "../views/MesaCartasView";
import { PilaCartasView } from "../views/PilaCartasView"

class MesaController {

    #sceneController;
    #mesaCartasView;
    #mesaTacoView;
    #juego

    constructor(sceneController, juego) {
        //TODO: Construir este controller (puede que haga falta parametrizarlo)
        this.#sceneController = sceneController;
        this.#juego = juego;
        let mcv = new MesaCartasView(juego.mesa);
        mcv._construirVistas();
        this.#mesaCartasView = mcv;

        let mazo = new PilaCartasView(juego.mazo, "mano0");
        this.#mesaTacoView = mazo;

    }

    getCartasViews() {
        //TODO: Obtiene las vistas de las cartas sobre la mesa
        return this.#mesaCartasView.getSelection();

    }

    getCartasModelsSelected() {
        //TODO: Obtiene las cartas (models) de las cartas que han sido seleccionadas 
            let manoModelSeleccionda=[];
            let manoMesa = this.#juego.mesa.mano;
            this.#mesaCartasView.getSelection().forEach(CartaView => {
                if(CartaView.getSelectorCss()[1] == "carta-seleccionada"){
                    manoMesa.forEach(carta => {
                        if(carta.clave == CartaView.getModel().slice(18,20)){
                            manoModelSeleccionda.push(carta);
                           
                        }
                    });
                }
            });
            return manoModelSeleccionda;
           
    }

    resetSelection() {
        //TODO: Elimina toda seleccion efectuada sobre cartas de la mesa
        let cartasMesa = [];
        cartasMesa = this.#mesaCartasView();
        cartasMesa.forEach(carta => {
            carta.disableSelection();
        });



    }

    redraw() {
        //TODO: Envía mensaje para que todas las cartas de la mesa se redibujen
        this.#mesaCartasView.render();
    }

    update(data) {
        //TODO: Método que recibe notficaciones del modelo (patrón observer)
        
        let mcv = new MesaCartasView(data.mesa);
       
        this.#mesaCartasView = mcv;
        this.#juego=data;   
        mcv._construirVistas();
        this.redraw();
    }
    getScenecontroller() {
        return this.#sceneController._getJuego();
    }
    getScr() {
        return this.#sceneController;

    }
}

export { MesaController }