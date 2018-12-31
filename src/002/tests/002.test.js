import findTheSumOfFibocciEvenNumberWhichLessThan, {
  fibonacciLessThan
} from "../002";

describe("fibonacciLessThan", () => {
  it("should return valid data", () => {
    expect(fibonacciLessThan(10)).toEqual([1, 2, 3, 5, 8]);
  });
});

describe("002", () => {
  it("should be 10 for 10", () => {
    expect(findTheSumOfFibocciEvenNumberWhichLessThan(10)).toEqual(10);
  });

  it("should be 10 for 30", () => {
    expect(findTheSumOfFibocciEvenNumberWhichLessThan(30)).toEqual(10);
  });

  it("should be 44 for 35", () => {
    expect(findTheSumOfFibocciEvenNumberWhichLessThan(35)).toEqual(44);
  });

  it("should be 10 for 34", () => {
    expect(findTheSumOfFibocciEvenNumberWhichLessThan(34)).toEqual(10);
  });
});
