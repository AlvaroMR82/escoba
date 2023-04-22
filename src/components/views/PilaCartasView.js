import { CartaView } from "./CartaView";

class PilaCartasView {

    //TODO: Implementar el cuerpo de la clase. Representa cualquier colección de Vistas de Cartas apilada
    // como puede ser la pila de bazas ganadas de un jugador, el mazo de cartas...
    #cartasViews=[];
    constructor(mazo,elemento) {
        //TODO: Construir este vista (puede que haga falta parametrizarlo)
        let mano=[];
        mano = mazo;
        for (let i = 0; i < mano.length; i++) {
            let selectorCss="carta-en-taco";
           
            let src= "assets/img/cartas/" + mano[i].clave + ".png";
    
            this.#cartasViews.push(new CartaView(src,false,selectorCss));
            
          }
          
          this.#cartasViews.forEach(carta => {
            carta.render(elemento);
        });
       
    }
    
}

export {
    PilaCartasView
}