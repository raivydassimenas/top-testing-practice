const { capitalize } = require("./index");

test("capitalize", () => {
  expect(capitalize("raivydas")).toBe("Raivydas");
  expect(capitalize("")).toBe("");
  expect(capitalize("rAivydas")).toBe("Raivydas");
  expect(() => capitalize("123")).toThrow(
    "The string must consist of alphabetic characters only"
  );
});
