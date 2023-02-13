import { Jugador } from './Jugador.js';
import { Mesa } from './Mesa.js';
import { BarajaEspagnola } from './BarajaEspagnola.js';
import { Juego } from './Juego.js';
{
    let baraja= new BarajaEspagnola();
  
function valorCarta() {
    let mibaraja=baraja.cartas;
     
          
         mibaraja.forEach(carta => {
            console.log(carta.toString());
           
          let valor=carta.toString();
          let vF = valor[1];
          if (vF == 'C' | vF == 'R' | vF == 'S'){
          if (vF == "S") {
              carta.valor = 8;
          } else if (vF == "C") {
            carta.valor = 9;
          } else if (vF == "R") {
            carta.valor= 10;
          }
        }else{
          carta.valor=parseInt(vF);
            
        }
        console.log(carta.valor);
            
         });
      
     return this;
 
     
    

}
    console.log("hola")
    valorCarta();
  
}