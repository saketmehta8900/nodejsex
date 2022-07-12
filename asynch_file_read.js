var fs = require("fs")

fs.readFile("test.txt",(err,data)=>
{
if(!err)
{
console.log(data.toString())
}
else
{
console.log(err)
}
})

console.log("Statement1 after read file")

console.log("Statement2 after read file")
