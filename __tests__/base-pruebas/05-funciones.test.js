import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Prueba JS - funciones:", () => {
  test("Prueba unitaria para getUser() -La función debe retornar un objeto-:", () => {
    const usuarioPruebas = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const returnedUserFromOriginalFunction = getUser();

    expect(usuarioPruebas).toStrictEqual(returnedUserFromOriginalFunction);
  });

  test("Prueba unitaria para getUsuarioActivo(nombre) -La función debe devolver un objeto-:", () => {
    const nombrePruebas = "René Rivas";

    const usuarioPruebas = {
      uid: "ABC567",
      username: nombrePruebas,
    };

    const returnedUserFromOriginalFunction = getUsuarioActivo(nombrePruebas);

    expect(usuarioPruebas).toStrictEqual(returnedUserFromOriginalFunction);
  });
});
