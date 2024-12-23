import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

export default {
    input: 'index.js',
    output: [
        {
            file: 'dist/index.cjs.js',
            format: 'cjs',
            exports: 'named',
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm',
        },
    ],
    external: ['react', 'react-dom'], // Mark React as an external dependency
    plugins: [
        resolve({ extensions: ['.js', '.jsx'] }),
        commonjs(),
        babel({
            babelHelpers: 'bundled',
            extensions: ['.js', '.jsx'], // Include .jsx files for transpilation
            presets: ['@babel/preset-react'], // Ensure Babel transpiles JSX
        }),
    ],
};
