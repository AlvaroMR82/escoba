
class CartaView {

    static BACK_CARD = "assets/img/cartas/back-card.png";
    static CSS_SELECTED_SELECTOR = "carta-seleccionada"
    #element
    #visible
    #model
    #selectorCss

    constructor(){
        //TODO: Construir este vista (puede que haga falta parametrizarlo)
    }

    render(){
        //TODO; Manipulación del DOM para renderizado de una carta (crear img, agregarla, etc.)
    }

    toggleSelection() {
        //TODO: Selecciona/Deselecciona carta
    }

    enableSelection() {
        //TODO: Selecciona carta
    }

    disableSelection() {
        //TODO: des-selecciona carta
    }
}
export { CartaView }