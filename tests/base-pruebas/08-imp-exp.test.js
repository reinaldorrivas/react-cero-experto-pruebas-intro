import {
  getHeroById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("Prueba JS - Funciones inbuilt arreglos:", () => {
  test("Retorna un objeto si existe, getHeroById():", () => {
    const idPruebas = 1;
    const heroePruebas = getHeroById(idPruebas);

    expect(heroePruebas).toBeTruthy();
  });

  test("Retorna un undefined si no existe, getHeroById():", () => {
    const idPruebas = 10;
    const heroePruebas = getHeroById(idPruebas);

    expect(heroePruebas).toBeFalsy();
  });

  test("Al comprobar la cantidad de héroes de DC devueltos por getHeroesByOwner(), deben ser tres(3):", () => {
    const casaComics = "DC";

    const cantidadHeroesDC = getHeroesByOwner(casaComics).length;

    expect(cantidadHeroesDC).toBe(3);
  });

  test("Al comprobar la cantidad de héroes de Marvel devueltos por getHeroesByOwner(), deben ser dos(2):", () => {
    const casaComics = "Marvel";

    const cantidadHeroesMarvel = getHeroesByOwner(casaComics).length;

    expect(cantidadHeroesMarvel).toBe(2);
  });

  test("Al comprobar el array devuelto por getHeroesByOwner() para DC, debe ser igual al de pruebas:", () => {
    const casaComics = "DC";

    const HeroesDCPruebas = [
      {
        id: 1,
        name: "Batman",
        owner: "DC",
      },
      {
        id: 3,
        name: "Superman",
        owner: "DC",
      },
      {
        id: 4,
        name: "Flash",
        owner: "DC",
      },
    ];

    const HeroesDC = getHeroesByOwner(casaComics);

    expect(HeroesDC).toStrictEqual(HeroesDCPruebas);
  });

  test("Al comprobar el array devuelto por getHeroesByOwner() para Marvel, debe ser igual al de pruebas:", () => {
    const casaComics = "Marvel";

    const heroesMarvelPruebas = [
      {
        id: 2,
        name: "Spiderman",
        owner: "Marvel",
      },
      {
        id: 5,
        name: "Wolverine",
        owner: "Marvel",
      },
    ];

    const HeroesMarvel = getHeroesByOwner(casaComics);

    expect(heroesMarvelPruebas).toStrictEqual(HeroesMarvel);
  });
});
