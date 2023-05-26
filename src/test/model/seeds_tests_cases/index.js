import { BarajaEspagnola } from '../../../components/models/BarajaEspagnola';

import test_case_01  from './test_case_01.json';
import test_case_02  from './test_case_02.json';
import test_case_03  from './test_case_03.json';
import test_case_04  from './test_case_04.json';
import test_case_05  from './test_case_05.json';

const cargarObjetosFromJson  = (test_case) => {
    const baraja = new BarajaEspagnola();

    // Establezco los valores particulares para la escoba
    baraja.cartas.forEach(unaCarta => {
        switch(unaCarta.numero){
            case 10: unaCarta.valor = 8;  break;
            case 11: unaCarta.valor = 9;  break;
            case 12: unaCarta.valor = 10; break;
            default: unaCarta.valor = unaCarta.numero;
        }
    });

    // Sustituyo literales de cartas por objetos de la clase Carta
    for (let baza of test_case) {
        for (let idx = 0; idx < baza.cartasBaza.length; idx++) {
            baza.cartasBaza[idx] = baraja.cartaByClave(baza.cartasBaza[idx]);
        }
    }
    return test_case;
}

// Transformo los literales json a objetos de mi modelo
cargarObjetosFromJson(test_case_01);
cargarObjetosFromJson(test_case_02);
cargarObjetosFromJson(test_case_03);
cargarObjetosFromJson(test_case_04);
cargarObjetosFromJson(test_case_05);

export {
    test_case_01,
    test_case_02,
    test_case_03,
    test_case_04,
    test_case_05,
}