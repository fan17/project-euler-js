/**
 * https://projecteuler.net/problem=3
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 *
 */

export const isPrimeNumber = number => {
  let result = number > 1;
  let temp = number - 1;
  while (temp > 1) {
    if (number % temp === 0) {
      result = false;
      break;
    }
    temp--;
  }

  return result;
};

export const getFactors = number => {
  let result = [];

  if (number > 1) {
    let temp = 2;
    while (temp <= number) {
      if (isPrimeNumber(temp) && number % temp === 0) {
        result = [...result, temp, ...getFactors(number / temp)];
        break;
      }
      temp++;
    }
  }

  return result;
};

export default number => {
  const factors = getFactors(number);

  return factors.length ? Math.max(...factors) : undefined;
};
