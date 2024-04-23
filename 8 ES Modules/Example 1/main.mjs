/*
Common JS

- Each file is treated as a module
- Variable, functions, classes, etc. are not accessible to other file by default
- Explicitly tell the module system which parts of our code should be exported through module.exports or exports
- To import code into a file, use the require() function

*/

/*
EcmaScript Modules or ES Modules or ESM

- At the time Node.js was created, there was not built-in module system in JavaScript
- Node.js defaulted to CommonJS as its modules system
- As of ES2015, JavaScript does have a standardised module system as part of the language itself
- That Module system is called EcmaScript Modules or ES Modules or ESM 
*/

// import functions from 'math-esm' module using ESM syntax
import { addition, subtraction, multiplication, division, modulo} from './math-esm.mjs';

// import the 'math' object from ' second math-esm.mjs'
import math from './math-esm-second-method.mjs';

// destructure the properties of the 'math' object
const { power, sqrt, log, exp, abs, cube } = math;

// perform arithmetic operations using the imported functions from math-esm.mjs
console.log("Addition:", addition(5, 3));
console.log("Subtraction:", subtraction(10, 4));
console.log("Multiplication:", multiplication(4, 6));
console.log("Division:", division(10, 2));
console.log("Modulo:", modulo(10, 3));

// perform arithmetic operations using the imported functions from math-esm-second-method.mjs
console.log("Power:", power(2, 3));
console.log("Square Root:", sqrt(25));
console.log("Logarithm:", log(10));
console.log("Exponential:", exp(2));
console.log("Absolute Value:", abs(-5));
console.log("Cube:", cube(3));
