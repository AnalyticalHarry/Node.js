// array for memory database
let userArray = [];

// creating function to store user data into userArray
const addUser = (user) => {
    userArray.push(user);
    return user;  // return the user added, not the whole array
}

// function to find user by their name in the userArray
const findUser = (userName) => {
    return userArray.find(user => user.name === userName);  
}

// exporting functions to interact with the user data
module.exports = { addUser, findUser };
