import { BarajaEspagnola } from '../../components/models/BarajaEspagnola'

describe('BEC - Baraja españoña - Creación', () => {
    test('BEC01 - Creación de la baraja por defecto con el nº correcto de cartas', () => {
        const baraja = new BarajaEspagnola();

        // Espero una baraja de exactamente 40 cartas
        expect(baraja.cartas).toBeTruthy();
        expect(baraja.cartas).toHaveLength(40);
    });

    test('BEC02 - Creación de la baraja solo con figuras', () => {
        const baraja = new BarajaEspagnola(0);

        // Espero una baraja de exactamente 40 cartas
        expect(baraja.cartas).toBeTruthy();
        expect(baraja.cartas).toHaveLength(12);
    });

    test('BEC03 - Creación de la baraja completa (8s y 9s)', () => {
        const baraja = new BarajaEspagnola(9);

        // Espero una baraja de exactamente 40 cartas
        expect(baraja.cartas).toBeTruthy();
        expect(baraja.cartas).toHaveLength(48);
    });

    test('BEC04 - Creación de la baraja completa con error de parámetro', () => {
        const valorIncorrecto = 10;
        expect( 
            () => new BarajaEspagnola(valorIncorrecto) 
        ).toThrow(new Error(`No se puede contruir la baraja con cartas de valor ${valorIncorrecto}`));
    });

    test('BEC05 - Creación de la baraja con CARTAS SIN repetir', () => {
        const baraja = new BarajaEspagnola();
        const conjunto = new Set();
        for (const unaCarta of baraja.cartas) conjunto.add(unaCarta.clave);
        expect(conjunto.size).toEqual(baraja.cartas.length);
    });
});

describe('BERC - Baraja españoña - Recuperar Cartas', () => {
    test('BERC01 - Obtener una carta de una baraja', () => {
        const clave = 'o1';
        expect(new BarajaEspagnola().cartaByClave(clave).clave).toEqual(clave);
    });
    test('BERC02 - Obtener una carta (con clave válida) que no se encuentra en la baraja', () => {
        const clave = 'o1';
        expect( 
            () => new BarajaEspagnola(0).cartaByClave(clave)
        ).toThrow(new Error(`Clave de carta no está en la baraja: ${clave}`));
    });
    test('BERC03 - Obtener una carta con clave inválida (long 3)', () => {
        const clave = 'oo1';
        expect( 
            () => new BarajaEspagnola().cartaByClave(clave)
        ).toThrow(new Error(`Clave de carta no válida: ${clave}. Debe ser un string de 2 caracteres`));
    });
    test('BERC04 - Obtener una carta con clave inválida (not String)', () => {
        const clave = 1;
        expect( 
            () => new BarajaEspagnola().cartaByClave(clave)
        ).toThrow(new Error(`Clave de carta no válida: ${clave}. Debe ser un string de 2 caracteres`));
    });
    test('BERC05 - Obtener array de cartas con claves válidas', () => {
        const claves = ['o1','o2'];
        const [carta1, carta2] = new BarajaEspagnola().cartasByClaves(...claves);
        expect([ carta1.clave, carta2.clave ]).toEqual(claves);
    });
    test('BERC06 - Obtener array de cartas con una clave inválida (long 3)', () => {
        const claves = ['o1','ee2'];
        expect( 
            () => new BarajaEspagnola().cartasByClaves(...claves)
        ).toThrow(new Error(`Clave de carta no válida: ${claves[1]}. Debe ser un string de 2 caracteres`));
    });
    test('BERC07 - Obtener array de cartas con claves inválida (not String)', () => {
        const claves = ['o1','e5',1];
        expect( 
            () => new BarajaEspagnola().cartasByClaves(...claves)
        ).toThrow(new Error(`Clave de carta no válida: ${claves[2]}. Debe ser un string de 2 caracteres`));
    });
    test('BERC08 - Obtener array de cartas con claves duplicadas (sin que interfiera en resultado)', () => {
        const claves = ['o1','o1'];
        const conjunto = new Set(claves);
        const resultado = new BarajaEspagnola().cartasByClaves(...claves)
        expect(resultado).toHaveLength(conjunto.size);
    });
});