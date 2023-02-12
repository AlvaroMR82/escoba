import { Jugador } from './Jugador.js';
import { Mesa } from './Mesa.js';
import { BarajaEspagnola } from './BarajaEspagnola.js';
import { Juego } from './Juego.js';
{
    let baraja= new BarajaEspagnola();
  
function valorCarta() {
    let mibaraja=baraja.cartas;
    let carta=mibaraja[1];
    carta.valor=5;
    console.log(carta.numero);

   
    
    

}
    console.log("hola")
    valorCarta();
  
}