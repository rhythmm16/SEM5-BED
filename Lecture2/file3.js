//3rd file is made to overcome circular dependency
function multiply(a, b) { 
    return a * b;
}   
function add(a, b) {
    return a + b;
}
module.exports.multiply = multiply; // Exporting the multiply function
module.exports.add = add; 