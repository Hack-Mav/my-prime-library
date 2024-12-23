// Function to check if a number is prime
export const isPrime = (num) => {
    if (num <= 1) return false;
    for(let i=2; i<=Math.sqrt(num);i++) {
        if(num%i === 0) return false;
    }
    return true;
};

// Function to generate all prime numbers up to a given number
export const generatePrimes = (limit) => {
    const primes = [];
    for(let i=2; i<= limit; i++) {
        if(isPrime(i)) primes.push(i);
    }
    return primes;
}