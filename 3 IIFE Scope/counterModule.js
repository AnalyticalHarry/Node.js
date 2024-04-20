// IIFE that initialises a counter and returns an object
// method to interact with counter
const counterModule = (function() {

    let count = 0;
    const increment = () => {
        count++;
        return count;
    };

    const decrement = () => {
        count--;
        return count;
    };

    const getCount = () => {
        return count;
    };

    return {
        increment, decrement, getCount
    };

// closing parentheses invoke the function immediately
})();

module.exports = counterModule;