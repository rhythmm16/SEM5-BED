let file=require("./index.js"); // Importing the module from index.js, reads the file index.js in the same directory
// The file is read only once, so if you change index.js, you need to restart the server to see the changes
console.log(file.add(5, 3)); 
console.log(file.subtract(5, 3));
console.log(file.multiply(5, 3)); 