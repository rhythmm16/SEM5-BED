function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b; 
}
module.exports.add=add; // module.exports is used to export functions or variables from a module in Node.js
module.exports.subtract=subtract;
module.exports.multiply=multiply; 