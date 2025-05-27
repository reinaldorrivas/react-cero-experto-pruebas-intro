import { getHeroByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Prueba JS - Promesas:", () => {
  test("La promesa getHeroByIdAsync(id) debe retornar un héroe:", (done) => {
    const heroID = 1;

    const returnedHero = getHeroByIdAsync(heroID);

    returnedHero.then((hero) => {
      expect(hero).toStrictEqual({
        id: 1,
        name: expect.any(String),
        owner: expect.any(String),
      });

      done();
    });
  });

  test("La promesa getHeroByIdAsync(id) debe retornar un error:", (done) => {
    const heroID = 100;

    const returnedHero = getHeroByIdAsync(heroID);

    returnedHero.catch((error) => {
      expect(error).toStrictEqual(expect.any(String));

      done();
    });
  });
});
