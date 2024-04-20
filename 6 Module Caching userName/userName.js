// class called UserName
class UserName {
    // constructor function to initialize a new instance of UserName with a given name
    constructor(name) {
        this.name = name; // Set the 'name' property of the instance to the provided 'name'
    }

    // method to get the name of the instance
    getName() {
        return this.name; // Return the value of the 'name' property of the instance
    }

    // method to set a new name for the instance
    setName(newName) {
        this.name = newName; 
        return this; 
    }
}

// Export the UserName class to make it available for other modules
module.exports = UserName;
