// arithemetic operations 
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