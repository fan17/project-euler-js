import calculate from "../index";

describe("005", () => {
  it("should correctly calculate", () => {
    const results = {
      1: 1,
      2: 2,
      3: 6,
      4: 24,
      5: 60,
      6: 60,
      10: 2520
    };

    Object.keys(results).map(key => {
      expect(calculate(key)).toEqual(results[key]);
    });
  });
});
