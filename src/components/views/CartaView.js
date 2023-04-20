
class CartaView {

    static BACK_CARD = "assets/img/cartas/back-card.png";
    static CSS_SELECTED_SELECTOR = "carta-seleccionada"
    #element
    #visible
    #model
    #selectorCss

    constructor(src,visible,selectorCss){
        //TODO: Construir este vista (puede que haga falta parametrizarlo)
        let element = document.createElement('img');
        
        if(visible){
            element.src = src;
        }else{
            element.src = BACK_CARD;
        }
        element.className = "carta";
        this.selectorCss= selectorCss;      
        this.#visible=visible;
        this.#element=element;
    }

    render(elemento){
        //TODO; Manipulación del DOM para renderizado de una carta (crear img, agregarla, etc.)
        let doc= document.getElementById(elemento);
        doc.append(this);
    }

    toggleSelection() {
        this.#element.classList.toggle("carta-seleccionada")
    }

    enableSelection() {
        this.#element.classList.add("carta-seleccionada")

    }

    disableSelection() {
        this.#element.classList.remove("carta-seleccionada")
    }
}
export { CartaView }