// require the counter module which is defined in another file, assuming
// it is in the same directory and named as 'counterModule.js'
const counter = require('./counterModule');

// Use the counter module to increment and get the counter value
console.log("Initial Counter Value:", counter.getCount()); 

// Increment the counter
counter.increment();
console.log("Counter Value after 1 Increment:", counter.getCount()); 

// Increment the counter again
counter.increment();
console.log("Counter Value after 2 Increments:", counter.getCount()); 

// Decrement the counter
counter.decrement();
console.log("Counter Value after 1 Decrement:", counter.getCount()); 
