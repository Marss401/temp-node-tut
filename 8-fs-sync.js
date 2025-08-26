//synchronous approach
const {readFileSync, writeFileSync} = require('fs'); //Destructuring method
//the one above is the same thing as the one below
// const fs = require('fs');
// fs.readFileSync;
console.log('start');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');
console.log(first);
console.log(second);


writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`)

console.log('done with this task');
console.log('starting the next one');