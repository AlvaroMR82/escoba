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
        let bcv = new PilaCartasView(this.#jugadorModel.misBazas,"baza1");
        this.#bazasCartasView=bcv; 
    }

    // Events
    _registrarEventosManoJugador() {
        let cartasListener = [];
        cartasListener = this.#manoJugadorCartasView.getModel();
        cartasListener.forEach(cartasL => {
            let Selector = "img[src='" + cartasL.getModel() + "']";
            let Elemento = document.querySelector(Selector);
            Elemento.addEventListener('click', this._onClickCartaManoHandler.bind({ srcElement: Elemento }));
            Elemento.addEventListener('dblclick', this._onDoubleClickCartaManoHandler.bind({ srcElement: cartasL }));

        });



    }

    _desRegistrarEventosManoJugador() {
        // TODO: des-registrar eventos cartas mano
    }

    _registrarEventosMesa() {
        this.redraw;
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
        cartas = this.#manoJugadorCartasView.getModel();
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

        this.cuentaJuego();
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
        this.cuentaJuego();

    }


    _onDoubleClickCartaManoHandler = ({ srcElement }) => {
        //TODO: Implementar handler del doble clic (arrojar carta) sobre una carta de la mano
        console.log("has hecho dobleclick");
        let cartas = [];

        let juego = this.#mesaController.getScenecontroller();
        let src = srcElement.src.slice(40, 42);
        let jugador = juego.jugadores[1];
        let jugadorMano = this.#jugadorModel.miMano;
        jugadorMano.forEach(carta => {
            console.log(carta.clave)
            if (carta.clave == src) {
                jugador.arroja(carta);

            }
        });

        
        this.#mesaController.update(this.#mesaController.getScenecontroller());
        this.#mesaController.redraw();
        this.update(jugador);


    }

    _redraw() {
        // Redibujar
        // Envía mensaje a las vistas para que se redibujen

        this.#manoJugadorCartasView._contruirVistas();
        this.#manoJugadorCartasView.render();
      
        let bazas=this.#jugadorModel.misBazas;
        let cartas = [];
       bazas.forEach(baza => {
        
        let cartasBaza=baza.cartasBaza;
            cartasBaza.forEach(element => {
                cartas.push(element);
            });

     
       });
        
        if(this.#jugadorModel.misBazas){
        let bcv = new PilaCartasView(cartas,"baza1");
        this.#bazasCartasView=bcv; 
        }
    }

    update(data) {
        //TODO: Método que recibe notficaciones del modelo (patrón observer)

        let nuevoreparto = new ManoJugadorCartasView(data, this.#manoJugadorCartasView.getPosicionJugador(), this.#manoJugadorCartasView.getVisivilidadJugador());
        this.#manoJugadorCartasView = nuevoreparto;
        this.#jugadorModel=data;
        this._redraw();
        this._registrarEventosManoJugador();
        this._registrarEventosMesa();

    }
    cuentaJuego() {
        //noocntar las cartas en el view  
        //let jugador = this.#jugadorModel;

        let juego = this.#mesaController.getScenecontroller();
        let cartasMesaJuego = [];
        cartasMesaJuego = juego.mesa.mano;
        let jugador = juego.jugadores[1];
        let jugadorMano = jugador.miMano;
        let cartaMano;
        let cartasMesa = [];
        let arrayCartasMesa = document.getElementById('mesa');
        arrayCartasMesa = arrayCartasMesa.querySelectorAll('img');
        let arrayCartasMano = document.getElementById('mano1');
        arrayCartasMano = arrayCartasMano.querySelectorAll('img');
        arrayCartasMesa.forEach(cm => {
            if (cm.classList[1] == "carta-seleccionada") {
                
                cartasMesaJuego.forEach(carta => {
                    if (carta.clave == cm.src.slice(40, 42)) {
                        cartasMesa.push(carta);
                    }
                });

            }
        });
        arrayCartasMano.forEach(cm => {
            if (cm.classList[2] == "carta-seleccionada") {
               
                jugadorMano.forEach(carta => {
                    if (carta.clave == cm.src.slice(40, 42)) {
                        cartaMano = carta;
                    }
                });

            }
        });


        try {

            jugador.juega(cartaMano, ...cartasMesa);
            this.update(jugador);
            this.#mesaController.update(juego);
            this.#mesaController.redraw();
            this._registrarEventosMesa();
        } catch (error) {
            console.warn(error);
        }








    }


}

export { JugadorController }