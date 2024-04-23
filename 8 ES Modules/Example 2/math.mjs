// arithmetic operations 
export const addition = (a, b) => a + b;
export const subtraction = (a, b) => a - b;
export const multiplication = (a, b) => a * b;
export const division = (a, b) => {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
};
export const modulo = (a, b) => a % b;
export const power = (a, b) => a ** b;
export const sqrt = (a) => Math.sqrt(a);
export const log = (a) => Math.log(a);
export const exp = (a) => Math.exp(a);
export const abs = (a) => Math.abs(a);
export const cube = (a) => Math.pow(a, 3);
