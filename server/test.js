var fs = require('fs');

var currentPath = process.cwd();

console.log(__dirname)
console.log(fs.readFileSync("./server/views/generate.hbs", 'utf8'))