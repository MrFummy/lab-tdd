const {test, expect} = require ("@jest/globals");
const resta = require("../src/multiplicacion");


test("El producto de 7 y 3 devuelve 21", () => {
    // arrange
    const a = 7;
    const b = 3;
    const esperado = 21;
    // act
    const resultado = multiplicacion(a, b);
    // assert
    expect(resultado).toBe(esperado);
})