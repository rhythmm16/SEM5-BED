// writeToFile.js

const fs = require('fs');

// Get input from command-line arguments (ignoring first two: node and script path)
const input = process.argv.slice(2).join(' ');

// Write to demo.txt
fs.writeFileSync('demo.txt', input + '\n');

console.log('Data written to demo.txt successfully.');
