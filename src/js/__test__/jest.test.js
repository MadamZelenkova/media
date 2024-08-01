import { parseCoordinates } from "../app.js";

describe("parseCoordinates", () => {
  const testCases = [
    [["51.50851, -0.12572"], "51.50851, -0.12572"],
    [["51.50851,-0.12572"], "51.50851, -0.12572"],
    [["[51.50851, -0.12572]"], "51.50851, -0.12572"],
  ];

  testCases.forEach(([input, expected]) => {
    test(`should parse coordinates from "${input}"`, () => {
      expect(parseCoordinates(input)).toBe(expected);
    });
  });

  test("should throw error for invalid format", () => {
    expect(() => parseCoordinates("invalid input")).toThrow(
      "Невалидный формат",
    );
  });

  test("should throw an error for out of range latitude", () => {
    expect(() => parseCoordinates("100, 0")).toThrow("Невалидный формат");
  });
});
