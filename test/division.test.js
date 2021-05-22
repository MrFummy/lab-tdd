const {test, expect} = require ("@jest/globals");
const resta = require("../src/division");


test("La division de 20 entre 5 devuelve 4", () => {
    // arrange
    const a = 20;
    const b = 5;
    const esperado = 4;
    // act
    const resultado = division(a, b);
    // assert
    expect(resultado).toBe(esperado);
})