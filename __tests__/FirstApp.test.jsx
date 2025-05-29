import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Prueba Unitaria - FirstApp:", () => {
  test("Debe coincidir con la captura (Snapshot):", () => {
    render(
      <FirstApp
        title="¡Hola a todos!"
        subTitle="¡Toca estudiar!"
        name="René Rivas"
      />
    );
  });
});
