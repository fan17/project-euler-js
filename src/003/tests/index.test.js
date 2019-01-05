import calculate, { isPrimeNumber, getFactors } from "../index";

describe("isPrimeNumber", () => {
  it("should correctly check if number is prime", () => {
    const results = {
      1: false,
      2: true,
      3: true,
      4: false,
      10: false
    };

    Object.keys(results).map(key => {
      expect(isPrimeNumber(key)).toEqual(results[key]);
    });
  });
});

describe("getFactors", () => {
  it("should correctly check if number is prime", () => {
    const results = {
      1: [],
      2: [2],
      3: [3],
      4: [2, 2],
      10: [2, 5],
      13195: [5, 7, 13, 29]
    };

    Object.keys(results).map(key => {
      expect(getFactors(key)).toEqual(results[key]);
    });
  });
});

describe("003", () => {
  it("should correctly calculate", () => {
    const results = {
      1: undefined,
      2: 2,
      4: 2,
      7: 7,
      10: 5,
      13195: 29
    };

    Object.keys(results).map(key => {
      expect(calculate(key)).toEqual(results[key]);
    });
  });
});
