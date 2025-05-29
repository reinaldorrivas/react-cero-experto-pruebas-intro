import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("Prueba JS - Desestructuración Objetos:", () => {
  test("Prueba unitaria para usContext(obj):", () => {
    const personajeEntradaPruebas = {
      clave: "Espaider Man",
      nombre: "Pedro Caobos",
      edad: 34,
    };

    const { clave, edad } = personajeEntradaPruebas;

    const objetoEsperadoPruebas = {
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    };

    const returnedObjectFromOriginalFunction = usContext(
      personajeEntradaPruebas
    );

    const {nombreClave, anios} = returnedObjectFromOriginalFunction;

    expect(objetoEsperadoPruebas).toStrictEqual(
      returnedObjectFromOriginalFunction
    );

    expect(clave).toBe(nombreClave);

    expect(edad).toBe(anios);
  });
});
