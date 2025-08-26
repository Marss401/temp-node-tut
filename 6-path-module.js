const path = require("path");
console.log(path.sep);

const filepath = path.join('/content', 'subfolder', 'test.txt')
console.log(filepath);

const base = path.basename(filepath);
console.log(base);
 const directory = path.dirname(filepath);
 console.log(directory);
const absolute = path.resolve(__dirname)
console.log(absolute);
