import { forEach } from "underscore";
import { ManoJugadorCartasView } from "../views/ManoJugadorCartasView"
import { PilaCartasView } from "../views/PilaCartasView"

class JugadorController {

    #manoJugadorCartasView;
    #bazasCartasView;
    #mesaController;
    #jugadorModel;

    constructor(jugador,num,visible) {
        //TODO: Construir este controller (puede que haga falta parametrizarlo)
        let jug = new ManoJugadorCartasView(jugador,num,visible);
        this.#manoJugadorCartasView=jug;
        this.#jugadorModel=jugador;
    }

    // Events
    _registrarEventosManoJugador() {
        /* TODO: registrar eventos cartas mano
        let cartas = this.#manoJugadorCartasView.getModelSelection();
        
        cartas.forEach(carta => {
            console.log(carta.getModel());
             //this._onClickCartaManoHandler(carta.getModel());       
        });
        
       // self._onClickCartaManoHandler(this.#manoJugadorCartasView[0].getModel());
       
      for (let  i= 0;  i< cartas.length; i++) {
        console.log(cartas[i].getModel());
        let src="";
        src=cartas[i].getModel();
        console.log(src);
        let element = document.querySelector('img[src="assets/img/cartas/c1.png"]');
        console.log(element);
        element.addEventListener('click', toogleSelection()  );

        //this._onClickCartaManoHandler({element});
      }
        
      console.log(cartas[1].getModel());
      

let cartas= this.#manoJugadorCartasView.getModelSelection();

      this.#manoJugadorCartasView.toggleSelectionCarta(cartas[0]);
      let element = document.querySelector('img[src="assets/img/cartas/cC.png"]');
      console.log(element);
      element.addEventListener('click', this.#manoJugadorCartasView.toggleSelectionCarta(cartas[0]) );
      */
    }

    _desRegistrarEventosManoJugador() {
        // TODO: des-registrar eventos cartas mano
    }

    _registrarEventosMesa() {
        // TODO: registrar eventos cartas mesa
    }

    _desRegistrarEventosMesa() {
        // TODO: des-registrar eventos cartas mesa
    }

    _onClickCartaManoHandler = ( { srcElement } ) => {
        //TODO: Implementar handler del clic (seleccionar carta) sobre una cara de la mano
        console.log(srcElement);
        let element = document.querySelector(`img[src="${srcElement}"]`);
        element.addEventListener('click',  );

    }

    _onClickCartaMesaHandler = ( { srcElement } ) => {
        //TODO: Implementar handler del clic (seleccionar carta) sobre una carta de la mesa
    }


    _onDoubleClickCartaManoHandler = ( { srcElement } ) => {
        //TODO: Implementar handler del doble clic (arrojar carta) sobre una carta de la mano
    }

    _redraw(){
        // Redibujar
        // Envía mensaje a las vistas para que se redibujen
        this.#manoJugadorCartasView._contruirVistas();
        this.#manoJugadorCartasView.render();
    }

    update(){
        //TODO: Método que recibe notficaciones del modelo (patrón observer)
    }

}

export { JugadorController }