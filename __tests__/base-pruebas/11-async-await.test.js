import { asyncRandomGifRequest } from "../../src/base-pruebas/11-async-await";

describe("Prueba JS - Promesas:", () => {
  test("asyncRandomGifRequest() debe de retornar un url:", async () => {
    const urlTest = await asyncRandomGifRequest();

    expect(urlTest).toStrictEqual(expect.any(String));
  });
});
