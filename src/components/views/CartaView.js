
class CartaView {

    static BACK_CARD = "assets/img/cartas/back-card.png";
    static CSS_SELECTED_SELECTOR = "carta-seleccionada"
    #element
    #visible
    #model
    #selectorCss

    constructor(model,visible,selectorCss){
        //TODO: Construir este vista (puede que haga falta parametrizarlo)
       
        this.#model= model;
        this.#selectorCss= selectorCss;      
        this.#visible=visible;
        
    }

    render(elemento){
        //TODO; Manipulación del DOM para renderizado de una carta (crear img, agregarla, etc.)
        let element = document.createElement('img');
        
        if(this.#visible){
            element.src = this.#model;
        }else{
            element.src = CartaView.BACK_CARD;
        }

        element.className = "carta";
        element.classList.add(this.#selectorCss);
        let doc= document.getElementById(elemento);
        doc.append(element);
        this.#element=element;
        this.#element.view=this;
    }

    toggleSelection() {
        this.#element.classList.toggle(CartaView.CSS_SELECTED_SELECTOR);
    }

    enableSelection() {
        this.#element.classList.add(CartaView.CSS_SELECTED_SELECTOR);

    }

    disableSelection() {
        this.#element.classList.remove( CartaView.CSS_SELECTED_SELECTOR);
    }
    getModel(){
        return this.#model;
    }
    getSelectorCss(){
        return this.#selectorCss;
    }
}
export { CartaView }