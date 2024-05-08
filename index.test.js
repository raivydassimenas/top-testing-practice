const index = require("./index");

test("capitalize", () => {
  expect(index.capitalize("raivydas")).toBe("Raivydas");
  expect(index.capitalize("")).toBe("");
  expect(index.capitalize("rAivydas")).toBe("Raivydas");
  expect(() => index.capitalize("123")).toThrow(
    "Cannot capitalize non-alphabetic string"
  );
});
