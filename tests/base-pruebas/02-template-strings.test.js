import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Prueba JS - Template String:", () => {
  test("Prueba unitaria para getSaludo():", () => {
    const nombre = "René";
    const mensaje = getSaludo(nombre);

    expect(mensaje).toBe(`Hola ${nombre}`);
  });
});
