const calc = require("./calculator");

describe("Add method", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(calc.add(1, 2)).toBe(3);
  });
  test("adds 30 to 3 equal 33", () => {
    expect(calc.add(30, 3)).toBe(33);
  });
  test("adds 100 to 1000 equal 1100", () => {
    expect(calc.add(100, 1000)).toBe(1100);
  });
});

describe("Subract method", () => {
  test("subract 3 from 30 to equal 27", () => {
    expect(calc.subract(30, 3)).toBe(27);
  });
  test("subract 30 from 3 to equal -27", () => {
    expect(calc.subract(3, 30)).toBe(-27);
  });
  test("subract 40 from 40 to equal 0", () => {
    expect(calc.subract(40, 40)).toBe(0);
  });
});

describe("Divide method", () => {
  test("divide 12 by 3 to equal 4", () => {
    expect(calc.divide(12, 3)).toBe(4);
  });
  test("divide 0 by any number to equal 0", () => {
    expect(calc.divide(0, 9)).toBe(0);
  });
  test("divide any number by 0 get undefined", () => {
    expect(() => calc.divide(3, 0)).toThrow("undefined");
  });
});

describe("Multiply method", () => {
  test("multiply 5 with 4 to equal 20", () => {
    expect(calc.multiply(5, 4)).toBe(20);
  });
  test("multiply 5000 with 0 to equal 0", () => {
    expect(calc.multiply(5000, 0)).toBe(0);
  });
});
