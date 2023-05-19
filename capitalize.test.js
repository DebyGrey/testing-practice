const capitalize = require("./capitalize");

describe("Capitalize", () => {
  test("Capitalize the string", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
});
