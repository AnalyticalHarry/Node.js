// module: A module is an encapsulated and resuable chunk of code that has its own context
// In node.js, each file is treated as a seprate modules

/*
Types of Modules:
1. Local Modules - Modules that can created in our applications
2. Built in Modules - Modules that Node.js ship with out of the box
3. Third party modules - Modules written by other developers that we can use in our application
*/

console.log("Hello from index.js");

// commonJS
/* 
commonJS is a standard that states how a modules should be structured 
and shared

Node js adopted commonJS when it started out and is what you will see in code bases
*/

const add = require("./add.js");
const division = require("./division.js");
const sub = require("./sub.js");

add(10, 20);
sub(402, 234);
division(40, 2);
