var fs = require("fs")

var data =fs.readFileSync("test.txt")

console.log(data.toString())

console.log("Statement1 after read file")

console.log("Statement2 after read file")

