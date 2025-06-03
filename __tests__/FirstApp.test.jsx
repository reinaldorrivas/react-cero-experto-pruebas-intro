import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Prueba Unitaria - FirstApp:", () => {
  test("Debe coincidir con la captura (Snapshot):", () => {
    const title = "¡Hola a todos!";
    const subTitle = "¡Toca estudiar!";
    const name = "René Rivas";

    const { container } = render(
      <FirstApp title={title} subTitle={subTitle} name={name} />
    );

    expect(container).toMatchSnapshot();
  });

  test("Debe de existir el texto para el título:", () => {
    const title = "¡Hola a todos!";
    const subTitle = "¡Toca estudiar!";
    const name = "René Rivas";

    const { getByText } = render(
      <FirstApp title={title} subTitle={subTitle} name={name} />
    );

    expect(getByText(title)).toBeTruthy();
  });

  test("Debe mostrar el título en un <h1></h1>:", () => {
    const title = "¡Hola a todos!";
    const subTitle = "¡Toca estudiar!";
    const name = "René Rivas";

    const { container } = render(
      <FirstApp title={title} subTitle={subTitle} name={name} />
    );

    const h1 = container.querySelector("h1");

    expect(h1.innerHTML).toContain(title);
  });
});
