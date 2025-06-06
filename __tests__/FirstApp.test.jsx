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

  test("Debe de estar el tìtulo en la etiqueta correspondiente", () => {
    const title = "¡Hola a todos!";
    const subTitle = "¡Toca estudiar!";
    const name = "René Rivas";

    const { getByTestId } = render(
      <FirstApp title={title} subTitle={subTitle} name={name} />
    );

    expect(getByTestId("data-title").innerHTML).toContain(title);
  });
  test("Debe de existir múltiples concurrencias del subtítulo:", () => {
    const title = "¡Hola a todos!";
    const subTitle = "¡Toca estudiar!";
    const name = "René Rivas";

    const { getAllByText } = render(
      <FirstApp title={title} subTitle={subTitle} name={name} />
    );

    expect(getAllByText(subTitle).length).toBeGreaterThan(1);
  });
});
