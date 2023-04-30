import './style.css'
//import './src/components/prueba1'
import  { init } from './src/components/controllers/sceneController'


let inicio = init();

inicio._creaModelo();
inicio._crearEscena();
//inicio._clickHandlerNuevoJuego();
inicio._registrarEventos();
/*
let element = document.querySelector('img[src="assets/img/cartas/cC.png"]');
element.addEventListener('click', function () {sec(element)});
*/
