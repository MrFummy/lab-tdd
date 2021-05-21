const {test, expect} = require ("@jest/globals");
const resta = require("../src/resta");


test("La resta de 7 y 5 devuelve 2", () => {
    // arrange
    const a = 7;
    const b = 5;
    const esperado = 2;
    // act
    const resultado = resta(a, b);
    // assert
    expect(resultado).toBe(esperado);
})