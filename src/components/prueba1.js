
import { Juego } from './models/Juego';
import { CartaView } from './views/CartaView';
import { ManoJugadorCartasView } from './views/ManoJugadorCartasView';
import { MesaCartasView } from './views/MesaCartasView';
import { PilaCartasView } from './views/PilaCartasView';
let src="";
let src1="";
let juego = new Juego();


 juego.init();
 juego.repartir();
 
 let mjcv = new ManoJugadorCartasView(juego.jugadores[0],0,false);
 mjcv._contruirVistas();
 mjcv.render();
 let mjcv1 = new ManoJugadorCartasView(juego.jugadores[1],1,true);
 mjcv1._contruirVistas();
 mjcv1.render();
  let mcv = new MesaCartasView(juego.mesa);
  mcv._construirVistas();
  mcv.render();

  let pcv = new PilaCartasView(juego.mazo,"mano0");
   /*
 src = "assets/img/cartas/" + juego.mazo[0].clave + ".png";
 src1 = "assets/img/cartas/back-card.png";
 let carta = new CartaView(src,true,"carta");
 let cartab = new CartaView(src1,false,"carta-en-taco");
 carta.render("mesa");
 carta.render("mano1");
 carta.render("mano2");
 juego.mazo.forEach(cartaMazo => {
    src = "assets/img/cartas/" + cartaMazo.clave + ".png";
    cartab.render("mano0");
 });
 juego.mazo.forEach(cartaMazo => {
    src = "assets/img/cartas/" + cartaMazo.clave + ".png";
    let cartac = new CartaView(src,true,"carta");
    cartac.render("mesa");
 });
 */