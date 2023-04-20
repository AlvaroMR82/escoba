import { CartaView } from "./CartaView";

class MesaCartasView {

    /** Cartas visibles en esta vista
     * @type { array<Carta> }
     */
    #cartasViews = [];
    #mesaModel;

    constructor() {
        //TODO: Construir este vista (puede que haga falta parametrizarlo)
    }

    _construirVistas(){
        //TODO: Construir las vistas que agrega
    }

    getSelection(){
        //TODO: Retorna la coleccion de vistas seleccionadas
    }

    render(){
        //TODO; Manipulación del DOM para ubicación de las cartas
    }
}

export { MesaCartasView }