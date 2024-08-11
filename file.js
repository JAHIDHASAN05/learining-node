const fs = require('fs')
// console.log(fs);

const read = fs.readFileSync('./texts/reading.txt', 'utf-8')

console.log(read);
