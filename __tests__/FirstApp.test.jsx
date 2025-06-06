import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Prueba Unitaria - FirstApp:", () => {
  const title = "¡Hola a todos!";
  const subTitle = "¡Toca estudiar!";
  const name = "René Rivas";

  test("Debe coincidir con la captura (Snapshot):", () => {
    const { container } = render(
      <FirstApp title={title} subTitle={subTitle} name={name} />
    );

    expect(container).toMatchSnapshot();
  });

  test("Debe de existir el texto para el título:", () => {
    render(<FirstApp title={title} subTitle={subTitle} name={name} />);

    const { getByText } = screen;

    expect(getByText(title)).toBeTruthy();
  });

  test("Debe de existir el texto para el título en un <h1></h1>:", () => {
    render(<FirstApp title={title} subTitle={subTitle} name={name} />);

    const { getByRole } = screen;

    expect(getByRole("heading", { level: 1 }).innerHTML).toBeTruthy();
  });

  test("Debe de estar el tìtulo en la etiqueta correspondiente", () => {
    render(<FirstApp title={title} subTitle={subTitle} name={name} />);

    const { getByTestId } = screen;

    expect(getByTestId("data-title").innerHTML).toContain(title);
  });

  test("Debe de existir múltiples concurrencias del subtítulo:", () => {
    render(<FirstApp title={title} subTitle={subTitle} name={name} />);

    const { getAllByText } = screen;

    expect(getAllByText(subTitle).length).toBeGreaterThan(1);
  });
});
