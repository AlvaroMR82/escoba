import { CartaView } from "./CartaView";

class MesaCartasView {

    /** Cartas visibles en esta vista
     * @type { array<Carta> }
     */
    #cartasViews = [];
    #mesaModel;

    constructor(mesa) {
        //TODO: Construir este vista (puede que haga falta parametrizarlo)
        this.#mesaModel = mesa;


    }

    _construirVistas() {
        //TODO: Construir las vistas que agrega
        let mano = [];
        mano = this.#mesaModel.mano;

        if (mano.length != 0) {
            for (let i = 0; i < mano.length; i++) {
                let selectorCss = "carta";

                let src = "assets/img/cartas/" + mano[i].clave + ".png";

                this.#cartasViews.push(new CartaView(src, true, selectorCss));

            }
        }else{
            let manoMesa = document.getElementById("mesa");
        manoMesa.innerHTML = "";

        }
    }

    getSelection() {
        //TODO: Retorna la coleccion de vistas seleccionadas
        return this.#cartasViews;
    }

    render() {
        //TODO; Manipulación del carta.addEventListener('click',DOM para ubicación de las cartas

        let manoMesa = document.getElementById("mesa");
        manoMesa.innerHTML = "";

        this.#cartasViews.forEach(carta => {
            carta.render("mesa");
        });
    }
}

export { MesaCartasView }