/**
 * https://projecteuler.net/problem=004
 *
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

export const isPalindrom = number =>
  number.toString() ===
  number
    .toString()
    .split("")
    .reverse()
    .join("");

export default (min, max) => {
  let result = 0;
  for (let i = max; i >= min; i--) {
    for (let j = max; j >= min; j--) {
      let resultOfMultiplication = i * j;
      if (
        resultOfMultiplication > result &&
        isPalindrom(resultOfMultiplication)
      ) {
        result = resultOfMultiplication;
      }
    }
  }

  return result;
};
