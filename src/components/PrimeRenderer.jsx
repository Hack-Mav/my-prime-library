import React from 'react';
import { generatePrimes } from '../utils/primes';

const PrimeRenderer = ({ limit }) => {
    const primes = generatePrimes(limit);

    return (
        <div>
            <h3>Prime Numbers up tp {limit}:</h3>
            <ul>
                {primes.map((prime) => {
                    <li key={prime}>{prime}</li>
                })}
            </ul>
        </div>
    );
};

export default PrimeRenderer;