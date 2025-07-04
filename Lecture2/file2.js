let file3=require("./file3.js"); // Importing from the same directory
console.log(file3); // Printing the imported module

let res=file3.add(5, 3); //variable to store the result of the add function
console.log(res); // Printing the result of the add function

function divide(a, b) {
    return a / b;
}
module.exports.divide = divide; 