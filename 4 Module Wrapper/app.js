// Require the readFile function from the readText.js module
const readFile = require('./readText');

// Function to handle the reading and logging of file content
const handleFileRead = (fileName) => {
    readFile(fileName, (err, data) => {
        if (err) {
            // If there's an error, log the error message to the console
            console.error(`Error reading file ${fileName}:`, err);
            return;
        }
        // If the file is read successfully, log its contents to the console
        console.log(`Contents of ${fileName}:`, data);
    });
};

// Read the first text file
handleFileRead('text.txt');

// Read the second text file
handleFileRead('textSecond.txt');
