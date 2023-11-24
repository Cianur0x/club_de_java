//Previo habiendo instalado node y npm, en un terminal de intellij en el directorio frontend
//C:\Users\usuario\IdeaProjects\borrar\club_de_java\frontend>npm init
//C:\Users\usuario\IdeaProjects\borrar\club_de_java\frontend>npm install --save-dev jest
//C:\Users\usuario\IdeaProjects\borrar\club_de_java\frontend>npm test

// Testing con jest en javascript para resolver las dependencias en el IDE:
// Settings > Languages & Frameworks > Javascript > Libraries > Download > busca jest y descarga e instala

//Lista completa de matchers:
//https://jestjs.io/es-ES/docs/expect
const suma = require('./prueba_jest');

test('sumar 1 + 2 es igual a 3', () => {
    expect(suma(1, 2)).toBe(3);
});


test('asignación de un objeto', () => {
    const datos = {uno: 1};
    datos['dos'] = 2;
    expect(datos).toEqual({uno: 1, dos: 2});
});

test('agregando un numero positivo que no sea 0', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('cero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

test('dos mas dos', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe y toEqual son equivalentes para números
    expect(value).toBe(4);
    expect(value).toEqual(4);
});

test('no hay I en Team', () => {
    expect('team').not.toMatch(/I/);
});

test('hay "stop" en Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});

const listaDeCompras = [
    'pañales',
    'pañuelos',
    'bolsas de basura',
    'toallas de papel',
    'leche',
];

test('la leche se encuentra en la lista de compras', () => {
    expect(listaDeCompras).toContain('leche');
    expect(new Set(listaDeCompras)).toContain('leche');
});

function compileAndroidCode() {
    throw new Error('you are using the wrong JDK!');
}

test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);

    // You can also use a string that must be contained in the error message or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);

    // Or you can match an exact error message using a regexp like below
    expect(() => compileAndroidCode()).not.toThrow(/^you are using the wrong JDK$/); // Test fails
    expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
});