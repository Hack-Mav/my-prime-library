import React from 'react';

// Function to check if a number is prime
const isPrime = num => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// Function to generate all prime numbers up to a given number
const generatePrimes = limit => {
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) primes.push(i);
  }
  return primes;
};

const PrimeRenderer = ({
  limit
}) => {
  const primes = generatePrimes(limit);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Prime Numbers up tp ", limit, ":"), /*#__PURE__*/React.createElement("ul", null, primes.map(prime => /*#__PURE__*/React.createElement("li", {
    key: prime
  }, prime))));
};

export { PrimeRenderer, generatePrimes, isPrime };
