let file3 = require("./file3.js"); // Importing from the same directory
console.log(file3);
let res = file3.multiply(5, 3);
console.log(res);

function subtract(a, b) {
  return a - b;
}

module.exports.subtract = subtract;