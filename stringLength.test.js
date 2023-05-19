const stringLength = require("./stringLength");

describe("stringLength", () => {
  test('"hello" should be 5', () => {
    expect(stringLength("hello")).toBe(5);
  });

  test("Empty string should return an error", () => {
    expect(() => stringLength("")).toThrow(
      "Input string must be at least 1 character long and not longer than 10 characters"
    );
  });

  test("String longer than 10 characters should return an error", () => {
    const longStr = "what the hell is going on here";
    expect(() => stringLength(longStr)).toThrow(
      "Input string must be at least 1 character long and not longer than 10 characters"
    );
  });
});
