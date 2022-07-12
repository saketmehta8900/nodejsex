var fs = require("fs")

var msg  = "this is a text file"

fs.writeFile("test.txt",msg, {flag:"a+"},err => {

    if(!err)
    {
console.log("File successfully created");
    }
    else
    {
        console.log(err)
    }
})

console.log("Statement1 after file write")

console.log("Statement2 after file write")
