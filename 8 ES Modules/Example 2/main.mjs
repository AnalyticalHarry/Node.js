// import all named exports from 'math-esm.mjs' into a single object named 'math'
import * as math from './math.mjs';

// we can now access all exported functions using the 'math' object
console.log("Addition:", math.addition(5, 3));
console.log("Subtraction:", math.subtraction(10, 4));
console.log("Multiplication:", math.multiplication(4, 6));
console.log("Division:", math.division(10, 2));
console.log("Modulo:", math.modulo(10, 3));
console.log("Power:", math.power(2, 3));
console.log("Square Root:", math.sqrt(25));
console.log("Logarithm:", math.log(10));
console.log("Exponential:", math.exp(2));
console.log("Absolute Value:", math.abs(-5));
console.log("Cube:", math.cube(3));