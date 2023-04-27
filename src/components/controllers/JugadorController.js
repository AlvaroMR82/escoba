import { forEach } from "underscore";
import { ManoJugadorCartasView } from "../views/ManoJugadorCartasView"
import { PilaCartasView } from "../views/PilaCartasView"
import { MesaController } from "./MesaController";
import { Juego } from "../models/Juego";

class JugadorController {

    #manoJugadorCartasView;
    #bazasCartasView;
    #mesaController;
    #jugadorModel;

    constructor(jugador, num, visible, mesaController) {
        //TODO: Construir este controller (puede que haga falta parametrizarlo)
        let jug = new ManoJugadorCartasView(jugador, num, visible);
        this.#manoJugadorCartasView = jug;
        this.#jugadorModel = jugador;
        this.#mesaController = mesaController;
    }

    // Events
    _registrarEventosManoJugador() {
        let cartasListener = [];
        cartasListener = this.#manoJugadorCartasView.getModelSelection();
        cartasListener.forEach(cartasL => {
            let Selector = "img[src='" + cartasL.getModel() + "']";
            let Elemento = document.querySelector(Selector);
            Elemento.addEventListener('click', this._onClickCartaManoHandler.bind({ srcElement: Elemento }));
            Elemento.addEventListener('dblclick', this._onDoubleClickCartaManoHandler.bind({ srcElement: Elemento }));

        });



    }

    _desRegistrarEventosManoJugador() {
        // TODO: des-registrar eventos cartas mano
    }

    _registrarEventosMesa() {this.redraw;
        // TODO: registrar eventos cartas mesa
        let cartasListener = [];
        cartasListener = this.#mesaController.getCartasViews();
        cartasListener.forEach(cartasL => {
            let Selector = "img[src='" + cartasL.getModel() + "']";
            let Elemento = document.querySelector(Selector);
            Elemento.addEventListener('click', this._onClickCartaMesaHandler.bind({ srcElement: Elemento }));
            

        });
    }

    _desRegistrarEventosMesa() {
        // TODO: des-registrar eventos cartas mesa
    }

    _onClickCartaManoHandler = ({ srcElement }) => {
        //TODO: Implementar handler del clic (seleccionar carta) sobre una cara de la mano
        let src = srcElement.src.slice(22, 46);
        //let clase = srcElement.className;
        let cartas = [];
        cartas = this.#manoJugadorCartasView.getModelSelection();
        let cartasMesa = [];
        cartasMesa = this.#mesaController.getCartasViews();
        if (this.#manoJugadorCartasView.isCartaSelected()) {

            cartasMesa.forEach(carta => {
                carta.disableSelection();
            });


        }

        for (let i = 0; i < cartas.length; i++) {
            if (src == cartas[i].getModel()) {
                // carta.toggleSelectionCarta(this);
                this.#manoJugadorCartasView.toggleSelectionCarta(cartas[i]);
            } else {
                cartas[i].disableSelection();
            }

        }
        this.update();

    }

    _onClickCartaMesaHandler = ({ srcElement }) => {
        //TODO: Implementar handler del clic (seleccionar carta) sobre una carta de la mesa
        if (this.#manoJugadorCartasView.isCartaSelected()) {
            let src = srcElement.src.slice(22, 46);
            let cartas = [];
            cartas = this.#mesaController.getCartasViews();
            for (let i = 0; i < cartas.length; i++) {
                if (src == cartas[i].getModel()) {
                    // carta.toggleSelectionCarta(this);
                    this.#manoJugadorCartasView.toggleSelectionCarta(cartas[i]);

                }

            }
        }
        this.update();
    }


    _onDoubleClickCartaManoHandler = ({ srcElement }) => {
        //TODO: Implementar handler del doble clic (arrojar carta) sobre una carta de la mano
        console.log("has hecho dobleclick");
        let cartas = [];
       // cartas = this.#manoJugadorCartasView.getModelSelection();
        let src = srcElement.src.slice(40, 42);
        let jugador=this.#jugadorModel;
        let jugadorMano= this.#jugadorModel.miMano;
        jugadorMano.forEach(carta => {
            console.log(carta.clave)
            if(carta.clave==src){
                jugador.arroja(carta);
               
            }
        });
        this.#manoJugadorCartasView._contruirVistas
        let nuevoreparto =  new ManoJugadorCartasView(jugador, this.#manoJugadorCartasView.getPosicionJugador(),this.#manoJugadorCartasView.getVisivilidadJugador());
        this.#manoJugadorCartasView=nuevoreparto;
        this._redraw();
        this._registrarEventosManoJugador();
        this.#mesaController.update(this.#mesaController.getScenecontroller());
        this.#mesaController.redraw();

       
       
    }

    _redraw() {
        // Redibujar
        // Envía mensaje a las vistas para que se redibujen

        this.#manoJugadorCartasView._contruirVistas();
        this.#manoJugadorCartasView.render();
        
    }

    update() {
        //TODO: Método que recibe notficaciones del modelo (patrón observer)
        console.log("update");
        let arrayCartas = document.querySelectorAll('.carta-seleccionada');
        let cartasMesa = [];
        //cartasMesa = this.#mesaController.getModelSelection();

        let jugador=this.#jugadorModel;
        let jugadorMano= this.#jugadorModel.miMano;
        let carta;
        arrayCartas.forEach(card => {
            let src = card.src.slice(40, 42);
             jugadorMano.forEach(c => {
                if(c.clave==src){
                
               carta= c;
                }
              });
            
        });

       
        
        
       
          
           // jugador.juega(carta,cartas);
    }

}

export { JugadorController }