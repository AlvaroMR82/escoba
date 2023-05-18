import { CartaView } from "./CartaView";

class PilaCartasView {

    //TODO: Implementar el cuerpo de la clase. Representa cualquier colección de Vistas de Cartas apilada
    // como puede ser la pila de bazas ganadas de un jugador, el mazo de cartas...
    #cartasViews=[];
    constructor(mazo,elemento,escobas) {
        //TODO: Construir este vista (puede que haga falta parametrizarlo)
        let mano=[];
        mano = mazo;
        
        let manoPila = document.getElementById(elemento);
        manoPila.innerHTML = "";
        
        for (let i = 0; i < mano.length; i++) {
            let selectorCss="carta-en-taco";
           
            let src= "assets/img/cartas/" + mano[i].clave + ".png";
    
            this.#cartasViews.push(new CartaView(src,false,selectorCss));
            
          }
                 
          this.#cartasViews.forEach(carta => {
            carta.render(elemento);
        });
        if(escobas>0){
            for (let f=0;   f < escobas; f++) {
            this.#cartasViews[f].escoba();
              
            }
        
       
        }
    }
    render(mazo,elemento,escobas){
        let mano=[];
        mano = mazo;
        
        let manoPila = document.getElementById(elemento);
        manoPila.innerHTML = "";
        
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