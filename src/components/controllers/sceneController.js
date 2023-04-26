
import { Juego } from "../models/Juego"
import { MesaCartasView } from "../views/MesaCartasView";
import { PilaCartasView } from "../views/PilaCartasView";
import { JugadorController } from './JugadorController';
import { MesaController } from './MesaController';

class SceneController {

    #juego;

    constructor() {
        //TODO: Construir este controller (puede que haga falta parametrizarlo)
        
    }

    _registrarEventos = () => {
        // TODO: registrar eventos de botoneras
        
    }

    _clickHandlerNuevoJuego = () => {
        let botonRepartir = document.getElementById("btn-nuevo-juego");
      // botonRepartir.addEventListener("click",  );
    }

    _creaModelo = (barajar = false) => {
        let juego = new Juego();
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
        jugador2._registrarEventosMesa();
        
    }
    _getJuego(){
        return this.#juego;
    }
}

const init = () => new SceneController();

export {
    init,
}

