import _ from 'underscore'

const palos = ['e', 'o', 'b', 'c'],
    especiales = ['J', 'C', 'R'];

// Esta función que crea una baraja
const crearBaraja = () => {
    const baraja = [];

    // La baraja será un array de strings en este formato 'paloValor'
    // Tienes la especificación de palos y de los valores especiales ya definidos
    // Por ejemplo: el as de oros sería 'o1'
    //              el siete de espadas 'e7'
    //              el rey de bastos    'bR'

    // genera la baraja

    // Debe retornar la baraja entera española (sin ochos ni nueves)

    palos.forEach(palo => {
        let barajapalo = [];
        for (let i = 1; i < 8; i++) {
            baraja.push(palo + i);
        }
        especiales.forEach(paloEspecial => {
            baraja.push(palo + paloEspecial)

        });
    });



    return baraja;
}

const baraja = crearBaraja();

function barajar() {
    let barajada = _.shuffle(baraja);

    return barajada;
}
let barajada;

// TODO: Crear manos, mesa y baraja
// Crea tus colecciones para representar las manos de cada jugador
// las cartas que hay sobre la mesa y la baraja de cartas que
// todavía no se han repartido


// TODO: Repartir cartas entre jugadores representándolas sobre la mesa
// Representa las cartas sobre la mesa manipulando el documento web

//función que crea los elementos para añadir cartas a la mando de la computadora.
let añadirCartaCompu = (id, src, alt, clase) => {

    let elemento = document.createElement('img');
    let ide1 = id;
    elemento.id = ide1;
    elemento.src = src;
    elemento.alt = alt;
    elemento.className = clase;

    return elemento;
}
//función que crea los elementos para añadir cartas a la mesa.
let añadirCartaMano = (id, src, alt, clase) => {

    let elemento = document.createElement('img');
    let ide1 = id;
    elemento.id = ide1;
    elemento.src = src;
    elemento.alt = alt;
    elemento.className = clase;
    //elemento.addEventListener('click', function(){borde3(ide1)});
    elemento.addEventListener('click', function () { seleCartaMano(ide1) });
    elemento.addEventListener('dblclick', function () { tirarCarta(ide1) });

    return elemento;
}
//función que crea los elementos para añadir cartas a la mando del jugador (tienen una funcion mas, doble click).
let añadirCartaMesa = (id, src, alt, clase) => {

    let elemento = document.createElement('img');
    let ide1 = id;
    elemento.id = ide1;
    elemento.src = src;
    elemento.alt = alt;
    elemento.className = clase;
    //elemento.addEventListener('click', function(){borde3(ide1)});
    elemento.addEventListener('click', function () { seleCartaMesa(ide1) });

    return elemento;
}

//Esta funcion hace el repartro de la baraja en la mano del jugador la computadora y la mesa.
function repartir() {
    //la variable barajada es el array de cartas barajado.
    barajada = barajar();

    //estos tres array es el control del reparto por arrays para versiones posteriores, cada array represanta las cartas que tiene jugador, computadora y mesa.
    let arrayComputadora = repartoArrayComp();
    let arrayJugador = repartoArrayJugador();
    let arrayMesa = repartoArrayMesa();

    //implementación del voton nuevo juego donde registra el evento click y llama a la funcion barajar boton.

    let botonRepartir = document.getElementById("btn-nuevo-juego");
    botonRepartir.addEventListener("click", barajarBoton);

    //se importa el elemento mano y se añanden las cartas en forma de taco que quedan en el array barajada.
    let mano = document.getElementById("mano0");
    for (let i = 10; i < barajada.length; i++) {
     let elemento = document.createElement('img');
        elemento.src = "assets/img/cartas/back-card.png";
        elemento.alt = "Carta boca abajo";
        elemento.className = "carta-en-taco carta";
        mano.append(elemento);
    }

    //se importa el elemento mano2(las cartas de la computadora) y se añanden las cartas en abanico.
    let manoComputadora = document.getElementById("mano2");

   let elemento1 = añadirCartaCompu(arrayComputadora[0], "assets/img/cartas/back-card.png", arrayComputadora[0], 'carta rotate-izq carta-en-mano');
   let elemento2 = añadirCartaCompu(arrayComputadora[0], "assets/img/cartas/back-card.png", arrayComputadora[1], 'carta  carta-en-mano');
   let elemento3 = añadirCartaCompu(arrayComputadora[0], "assets/img/cartas/back-card.png", arrayComputadora[2], 'carta rotate-der carta-en-mano');

    manoComputadora.append(elemento1, elemento2, elemento3);

    //se importa el elemento mano1(las cartas del jugador) y se añanden las cartas en abanico.
    let manoJugador = document.getElementById("mano1");


    elemento1 = añadirCartaMano(arrayJugador[0], "assets/img/cartas/" + arrayJugador[0] + ".png", arrayJugador[0], 'carta rotate-izq carta-en-mano');
    elemento2 = añadirCartaMano(arrayJugador[1], "assets/img/cartas/" + arrayJugador[1] + ".png", arrayJugador[1], 'carta  carta-en-mano');
    elemento3 = añadirCartaMano(arrayJugador[2], "assets/img/cartas/" + arrayJugador[2] + ".png", arrayJugador[2], 'carta rotate-der carta-en-mano');

    manoJugador.append(elemento1, elemento2, elemento3);

    //se importa el elemento mesa(las cartas de despliegan en la mesa) y se añanden las cartas.
    let mesa = document.getElementById("mesa");

    elemento1 = añadirCartaMesa(arrayMesa[0], "assets/img/cartas/" + arrayMesa[0] + ".png", arrayMesa[0], 'carta');
    elemento2 = añadirCartaMesa(arrayMesa[1], "assets/img/cartas/" + arrayMesa[1] + ".png", arrayMesa[1], 'carta');
    elemento3 = añadirCartaMesa(arrayMesa[2], "assets/img/cartas/" + arrayMesa[2] + ".png", arrayMesa[2], 'carta');
   let  elemento4 = añadirCartaMesa(arrayMesa[3], "assets/img/cartas/" + arrayMesa[3] + ".png", arrayMesa[3], 'carta');


    mesa.append(elemento1, elemento2, elemento3, elemento4);

    //se representan en la consola las cartas que tiene cada jugador, la mesa y el taco sobrante.
    console.log("Cartas computadora " + arrayComputadora);
    console.log("Cartas jugador " + arrayJugador);
    console.log("cartas de la mesa " + arrayMesa);
    console.log("Cartas del taco" + barajada);


}
//función boleana que devuelve true/false si algunas de las cartas de la mano esta selecionada.
let cartaSeleccionada = () => {
    let arrayCartas1 = document.querySelectorAll('div.mano1, .carta-seleccionada');
    if (arrayCartas1.length == 0) {
        return false;
    }
    return true;
}
//funcion implemantada a las cartas de la mano, hace un toogle de la clase "carta seleccionda" y en caso de que alguna de las otras cartas este seleccionada borra la otra carta y selecciona la nueva elegida.   
let seleCartaMano = (ide1) => {
    let elem = document.getElementById(ide1);
    elem.classList.toggle("carta-seleccionada");

    if (cartaSeleccionada()) {
        let arrayCartasMesa = document.querySelectorAll('#mano1, .carta-seleccionada');
        arrayCartasMesa.forEach(carta => {
            if (carta === elem) {
                carta.classList.add("carta-seleccionada");
            } else {
                carta.classList.remove("carta-seleccionada");
            }
        });
    }
    controlSumaCartas();

}
//función implementada a las cartas de la mesa, hace un toogle de la clase "carta seleccionda" solo se pueden elegir si hay una carta seleccionada de la mesa.   
let seleCartaMesa = (ide1) => {
    let elem = document.getElementById(ide1);
    if (cartaSeleccionada()) {
        elem.classList.toggle("carta-seleccionada");
    }
    controlSumaCartas();
}
//funcion que controla el valor numerico de las cartas seleccionadas si sumas 15 ganas la baza su superas deselecionas todo.
let controlSumaCartas = () => {
    let arrayCartas = document.querySelectorAll('.carta-seleccionada');
    let SumaTotal = 0;
    arrayCartas.forEach(elemento => {
        let sumaCartas = elemento.alt.charAt(1);
        if (sumaCartas == 'C' | sumaCartas == 'R' | sumaCartas == 'J') {
            console.log("control figura" + elemento.alt.charAt(1));
            let valorF = conversionFiguras(sumaCartas);
            sumaCartas = valorF;

        } else {
            sumaCartas = parseInt(sumaCartas);
        }

        SumaTotal = SumaTotal + sumaCartas;
        let SumaTotals = SumaTotal.toString();
        console.debug("control suma = " + SumaTotals);

        if (SumaTotal == 15) {
            console.log("has sumado 15");
            bazaGanada();

        } else if (SumaTotal >= 15) {
            console.log("te has pasado.")
            let arrayCartasMesa = document.querySelectorAll('div.mano1, .carta-seleccionada');
            arrayCartasMesa.forEach(carta => {
                carta.classList.remove("carta-seleccionada");

            });

        }


    });

}
//función que convierte el valor de las figuras en numerico y devuelve el valor correspodiente.
let conversionFiguras = (valorFigura) => {
    let vF = valorFigura;
    console.log("control variable figura" + vF);
    let sumaCartas;
    if (vF == "J") {
        sumaCartas = 8;
    } else if (vF == "C") {
        sumaCartas = 9;
    } else if (vF == "R") {
        sumaCartas = 10;
    }
    console.log("control conversion" + sumaCartas);
    return sumaCartas;

}
//función que cuando se suma 15 coge las cartas seleccionadas, las quita de la mesa,la mano y las añade a la baza del jugador. Falta control en array de estas cartas.  
let bazaGanada = () => {
    let arrayCartasMesa = document.querySelectorAll(' .carta-seleccionada');
    let baza = document.getElementById("baza1");
    arrayCartasMesa.forEach(carta => {
       let  elemento1 = añadirCartaCompu("cartac", "assets/img/cartas/back-card.png", barajada[0], 'carta-en-taco carta');
        baza.append(elemento1);

    });
    arrayCartasMesa.forEach(carta => {
        quitarCarta(carta);
        console.log("cartas quitadas");
    });


}
//funcion que busca dentro de un div para quitar una carta igual. Se usa cuando se gana una baza.
let quitarCarta = (elem) => {

    let cartasMano = document.getElementById("mano1");
    let cartasMesa = document.getElementById("mesa");
    if (cartasMesa.contains(elem)) {
        cartasMesa.removeChild(elem);
    }
    if (cartasMano.contains(elem)) {
        cartasMano.removeChild(elem);
    }
}
//función que se añade a las cartas de la mano jugador, en un dobble click la carta pasa de la mano a la mesa.
let tirarCarta = (ids) => {
    let cartasMano = document.getElementById("mano1");
    let cartasMesa = document.getElementById("mesa");
    let elem = document.getElementById(ids);


    if (cartasMano.contains(elem)) {
        cartasMano.removeChild(elem);
    }

    /*
   si le añadia asi el elemento pasaba a la mesa con las propiedades de las cartas de la mano y podia seleccionarla sin que las cartas de la mano estuvieran selecciondadas.
   elem.classList.remove("rotate-izq");
   elem.classList.remove("rotate-der");
   elem.classList.remove("carta-en-mano");

        cartasMesa.append(elem);
   */
  
    let elemaMesa = añadirCartaMesa(elem.id, elem.src, elem.alt, 'carta')
    cartasMesa.append(elemaMesa);


}
//funcion que llama a las funciones borrarTodo(vacia la mesa), y repartir(vuelve a repartir las cartas).
function barajarBoton() {
    borraTodo();
    repartir();
    //window.location.reload();

}
//coje todos los elementos de la mesa y los vacia.
let borraTodo = () => {
    let mano = document.getElementById("mano0");
    let manoJugador = document.getElementById("mano1");
    let mesa = document.getElementById("mesa");
    let manoComputadora = document.getElementById("mano2");
    let baza = document.getElementById("baza1");
    mano.innerHTML = "";
    manoJugador.innerHTML = "";
    mesa.innerHTML = "";
    manoComputadora.innerHTML = "";
    baza.innerHTML = "";
}
//array para control de las cartas de la computadora.
let repartoArrayComp = () => {
    let arrayComputadora = [];
    for (let i = 0; i < 3; i++) {
        arrayComputadora.push(barajada[i]);
        barajada.shift(barajada[i]);
    }
    return arrayComputadora;

}
//array para control de las cartas del jugador.
let repartoArrayJugador = () => {

    let arrayJugador = [];

    for (let i = 0; i < 3; i++) {
        arrayJugador.push(barajada[i]);
        barajada.shift(barajada[i]);
    }
    return arrayJugador;
}
//array para control de las cartas de la mesa.
let repartoArrayMesa = () => {

    let arrayMesa = [];

    for (let i = 0; i < 4; i++) {
        arrayMesa.push(barajada[i]);
        barajada.shift(barajada[i]);
    }
    return arrayMesa;
}
//funcion que al cargar pajina llama a la función repartir.
window.onload = repartir;