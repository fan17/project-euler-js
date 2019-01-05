import calculate from "../index";

describe("001", () => {
  it("should be 0 for 0", () => {
    expect(calculate(0)).toBe(0);
  });

  it("should be 0 for 3", () => {
    expect(calculate(3)).toBe(0);
  });

  it("should be 3 for 4", () => {
    expect(calculate(4)).toBe(3);
  });

  it("If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.", () => {
    expect(calculate(10)).toBe(23);
  });
});
