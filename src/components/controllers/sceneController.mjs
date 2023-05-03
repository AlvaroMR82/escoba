
import { Juego } from "../models/Juego"
import { MesaCartasView } from "../views/MesaCartasView";
import { PilaCartasView } from "../views/PilaCartasView";
import { JugadorController } from './JugadorController';
import { MesaController } from './MesaController';

class SceneController {

    #juego;
    #observers=[];
    constructor() {
        //TODO: Construir este controller (puede que haga falta parametrizarlo)
        
    }

    _registrarEventos = () => {
        // TODO: registrar eventos de botoneras
        let Elemento = document.getElementById('btn-nuevo-juego');
        Elemento.addEventListener('click', this._clickHandlerNuevoJuego);
    }

    _clickHandlerNuevoJuego = () => {
       
     
      console.log("evento de boton");
      this._creaModelo(true);
      this._crearEscena();
      this._registrarEventos();
      
            
    }  

    _creaModelo = (barajar) => {
        let juego = new Juego(barajar);
        juego.repartir();
        this.#juego = juego;
    }

    _crearEscena = () => {
        
       
        let mesa = new MesaController(this,this.#juego);
        let jugador1 = new JugadorController(this.#juego.jugadores[0],0,false,mesa);
        let jugador2 = new JugadorController(this.#juego.jugadores[1],1,true,mesa);    
        
        mesa.redraw();
        jugador1._redraw();
        jugador2._redraw();
        jugador2._registrarEventosManoJugador();
        //jugador2._registrarEventosMesa();

        this.#juego.addObserver(mesa);
        //this.#juego.addObserver(jugador1);
        this.#juego.addObserver(jugador2);
        //
    }
    
    _getJuego(){
        return this.#juego;
    }
}

const init = () => new SceneController();

export {
    init,
}

