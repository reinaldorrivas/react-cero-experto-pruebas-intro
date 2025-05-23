import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Prueba JS - Template String:", () => {
  test("Test para getSaludo():", () => {
    const nombre = "René";
    const mensaje = getSaludo(nombre);

    expect(mensaje).toBe(`Hola ${nombre}`);
  });
});
