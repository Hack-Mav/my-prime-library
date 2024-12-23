# My Prime Library

My Prime Library is a lightweight JavaScript/React package to determine if a number is prime and render all prime numbers up to a given limit. This library is ideal for anyone working on educational tools, number theory projects, or fun mathematical applications.

---

## Features

- **Prime Check:** Verify if a given number is a prime number.
- **Prime Renderer:** Render all prime numbers up to a specified number using a React component.

---

## Installation

To install the package, run:

```bash
npm install my-prime-library
```

---

## Usage

### 1. **Checking if a Number is Prime**

You can import and use the `isPrime` function:

```javascript
import { isPrime } from 'my-prime-library';

console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
```

### 2. **Generate Prime Numbers**

Use the `generatePrimes` function to get all prime numbers up to a limit:

```javascript
import { generatePrimes } from 'my-prime-library';

console.log(generatePrimes(10)); // [2, 3, 5, 7]
```

### 3. **React Component for Prime Rendering**

Use the `PrimeRenderer` React component to display all prime numbers up to a limit:

```jsx
import React from 'react';
import { PrimeRenderer } from 'my-prime-library';

const App = () => (
  <div>
    <h1>Prime Numbers</h1>
    <PrimeRenderer limit={50} />
  </div>
);

export default App;
```

---

## API Reference

### `isPrime(number)`
- **Description:** Checks whether a number is prime.
- **Parameters:**
  - `number` *(number)*: The number to check.
- **Returns:**
  - `boolean`: `true` if the number is prime, `false` otherwise.

### `generatePrimes(limit)`
- **Description:** Generates all prime numbers up to a given limit.
- **Parameters:**
  - `limit` *(number)*: The upper limit for generating primes.
- **Returns:**
  - `number[]`: An array of prime numbers.

### `<PrimeRenderer limit={number} />`
- **Description:** A React component that renders a list of prime numbers up to a given limit.
- **Props:**
  - `limit` *(number)*: The upper limit for rendering primes.

---

## Development

To work on the library locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/my-prime-library.git
   cd my-prime-library
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the library:
   ```bash
   npm run build
   ```

4. Test the library locally:
   ```bash
   npm link
   ```

5. Use it in another project:
   ```bash
   npm link my-prime-library
   ```

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request to contribute.

