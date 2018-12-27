/**
 * https://projecteuler.net/problem=1
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

const getNumbersWhichAreMultiply3or5 = number => {
  let result = [];
  while (number > 0) {
    if (number % 3 === 0 || number % 5 === 0) {
      result.push(number);
    }
    number--;
  }

  return result;
};

const sumOfArray = array =>
  array.reduce((prev, current) => (prev += current), 0);

export default number => sumOfArray(getNumbersWhichAreMultiply3or5(number - 1));
