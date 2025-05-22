test("Esta prueba no debería fallar", () => {
  const number = 0;
  if (number === 0) {
    throw new Error("No se puede dividir entre cero.");
  }
});
