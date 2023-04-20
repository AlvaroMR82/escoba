
import { Juego } from "../models/Juego"
import { JugadorController } from './JugadorController';
import { MesaController } from './MesaController';

class SceneController {

    #juego;

    constructor() {
        //TODO: Construir este controller (puede que haga falta parametrizarlo)
        this._creaModelo;
        this._crearEscena;
        this._clickHandlerNuevoJuego;
        this._registrarEventos;
    }

    _registrarEventos = () => {
        // TODO: registrar eventos de botoneras
    }

    _clickHandlerNuevoJuego = () => {
        let botonRepartir = document.getElementById("btn-nuevo-juego");
        botonRepartir.addEventListener("click", barajarBoton);
    }

    _creaModelo = (barajar = false) => {
        let juego = new Juego();
        this.#juego = juego;
    }

    _crearEscena = () => {

        let mesa = new MesaController(this.#juego);
        let jugador1 = new JugadorController(this.#juego);
        let jugador2 = new JugadorController(this.#juego);

        
 


    }

}

const init = () => new SceneController();

export {
    init,
}

