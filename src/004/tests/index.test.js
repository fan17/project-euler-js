import calculate, { isPalindrom } from "../index";

describe("isPalindron", () => {
  it("should correctly check", () => {
    const results = {
      1: true,
      2: true,
      9: true,
      10: false,
      11: true,
      101: true,
      1991: true,
      1981: false
    };

    Object.keys(results).map(key => {
      expect(isPalindrom(key)).toEqual(results[key]);
    });
  });
});

describe("004", () => {
  it("should correctly calculate for 2 digits numbers", () => {
    expect(calculate(10, 99)).toEqual(9009);
  });
});
