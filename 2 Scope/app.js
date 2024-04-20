// import the user module which allows creating and finding users
const userLib = require('./lib/user');

// create a user named 'Alice' and log the new user
const newUser = userLib.createUser('Harry');
console.log('Created User:', newUser);

// optionally, find and log the user by name
const foundUser = userLib.getUserByName('Harry');
console.log('Found User:', foundUser);


