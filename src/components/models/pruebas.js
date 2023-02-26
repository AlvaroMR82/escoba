import { Jugador } from './Jugador.js';
import { Mesa } from './Mesa.js';
import { BarajaEspagnola } from './BarajaEspagnola.js';
import { Juego } from './Juego.js';
import { Carta } from './Carta.js';
{
    const baraja = new BarajaEspagnola();
    let baza=[];
   baza=baraja.cartas;
          
          
    
    
    console.log(`${(baza.length)}`);
    baza.length=30;
     console.log(baza.length);
     
    


   
   
  
}


