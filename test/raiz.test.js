const {test, expect} = require ("@jest/globals");
const raiz = require("../src/raiz");


test("La raiz de 81 es 9", () => {
    // arrange
    const a = 81;
    const esperado = 9;
    // act
    const resultado = raiz(a);
    // assert
    expect(resultado).toBe(esperado);
})