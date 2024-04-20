// importing db, which is the database module that contains user operations
const db = require('./db');

// function to create a new user
const createUser = (name) => {
    const user = { name };
    db.addUser(user);
    return user;
}

// function to retrieve user by their name
const getUserByName = (userName) => {
    return db.findUser(userName);
}

// export createUser and getUserByName functions
module.exports = { createUser, getUserByName };
