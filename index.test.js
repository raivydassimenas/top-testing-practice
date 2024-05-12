const index = require("./index");

test("capitalize", () => {
  expect(index.capitalize("raivydas")).toBe("Raivydas");
  expect(index.capitalize("")).toBe("");
  expect(index.capitalize("rAivydas")).toBe("Raivydas");
  expect(() => index.capitalize("123")).toThrow(
    "Cannot capitalize non-alphabetic string"
  );
});

test("reverse string", () => {
  expect(index.reverseString("raiv")).toBe("viar");
  expect(index.reverseString("")).toBe("");
  expect(() => index.reverseString(null)).toThrow(
    "Cannot reverse null"
  );
});

test("calculator", () => {
  expect(index.calculator).toEqual(expect.objectContaining({
    add: expect.any(Function),
    subtract: expect.any(Function),
    multiply: expect.any(Function),
    divide: expect.any(Function)
  }));

  expect(index.calculator.add(2, 2)).toEqual(4);
  expect(index.calculator.subtract(2, 2)).toEqual(0);
  expect(index.calculator.multiply(2, 2)).toEqual(4);
  expect(index.calculator.divide(2, 2)).toEqual(1);
  expect(index.calculator.divide(2, 0)).toEqual(Infinity);
});

test("caesarCipher", () => {
  expect(index.caesarCipher("Aa.Zz", 1)).toEqual("Bb.Aa");
})