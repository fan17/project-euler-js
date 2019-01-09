/**
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 *
 */

 import getPrimeFactors from '../003/index';

export const getRange = (from, to) => {
  let result = [];

  for (let temp = from; temp <= to; temp++) {
    result.push(temp);
  }

  return result;
};

export const getCommonDividersForRange = range => {
  let result = [];
  const sortedRange = range.sort(number1, number2 =>
    number1 > number2 ? number1 : number2
  );

  for (number in sortedRange) {
      const primeFactors = getPrimeFactors(number);
      let temp = [...result];
      
      if ()
  }

  return result;
};

export default (from, to) =>
  getCommonDividersForRange(getRange(from, to)).reduce(
    (prev, current) => (current *= prev),
    1
  );
