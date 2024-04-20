// Import the 'fs' module for file system operations
const fs = require('fs');
// Import the 'path' module for handling file paths
const path = require('path');

// Define readFile as an arrow function that reads a file and returns its contents
const readFile = (fileName, callback) => {
    // Construct the absolute path to the file using __dirname and the filename
    const filePath = path.join(__dirname, fileName);
    // Read the file asynchronously using fs.readFile
    fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
        if (err) {
            // If an error occurs, call the callback with the error object and null for data
            return callback(err, null);
        }
        // If no error, call the callback with null for error and the data as file content
        callback(null, data);
    });
}

// Export the readFile function so it can be used by other modules
module.exports = readFile;
