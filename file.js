const fs = require('fs')
// console.log(fs);

const read = fs.readFileSync('./texts/reading.txt', 'utf-8')

//writeen file

const writtenFile= fs.writeFileSync('./texts/writtenByNode', read+ ' jahid the best')
console.log(writtenFile);