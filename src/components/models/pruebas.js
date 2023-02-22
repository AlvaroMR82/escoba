import { Jugador } from './Jugador.js';
import { Mesa } from './Mesa.js';
import { BarajaEspagnola } from './BarajaEspagnola.js';
import { Juego } from './Juego.js';
import { Carta } from './Carta.js';
{
    let baraja= new BarajaEspagnola();
   
 
function valorCarta() {
    let mibaraja=baraja.cartas;
    let baza=[];
   
          
          
    for (let i = 30; i < 40; i++) {

        baza.push(mibaraja[i]);
        
       // mazo1.shift();
    }
    
      baza.forEach(carta => {
       
        console.log(carta.toString());
       
      });
     
     return this;
 
     
    

}
    console.log("hola")
    valorCarta();
  
}


