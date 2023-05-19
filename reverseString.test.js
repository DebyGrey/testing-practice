const reverseString = require("./reverseString");

describe("reverseString", () => {
  test("Should return the reverse of a string", () => {
    expect(reverseString("Nice Job!")).toBe("!boJ eciN");
  });
});
