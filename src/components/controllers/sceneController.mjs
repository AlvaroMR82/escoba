
import { Juego } from "../models/Juego"
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
        //TODO: Implementar handler del botón de inicio de nuevo juego
    }

    _creaModelo = (barajar=false) => {
        // TODO: Crea el juego (model)
    }

    _crearEscena = () => {
        //TODO: Crea los controladores: MesaController y un JugadorController por cada jugador
    }

}

const init = () => new SceneController();

export {
    init,
}

