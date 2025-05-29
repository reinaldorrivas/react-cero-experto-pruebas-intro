import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Prueba JS - Desestructuración Arreglos:", () => {
  test("Prueba unitaria para retornaArreglo():", () => {
    const [palabraPruebas, numeroPruebas] = retornaArreglo();

    expect(palabraPruebas).toBe("ABC");
    expect(numeroPruebas).toBe(123);

    expect(palabraPruebas).toStrictEqual(expect.any(String));
    expect(numeroPruebas).toStrictEqual(expect.any(Number));
  });
});
