//server side js
const http = require("http")
const fs = require("fs")
const path  = require("path")


//req is request, res is response
const server = http.createServer((req, res) => {
    // console.log(req)

    const p = path.join(__dirname, "./public/index.html") //dirname gets absolute path to current file
    // console.log(p)
    const file = fs.readFileSync(path.join(__dirname,"./public/index.html"))
    res.writeHead(200).end(file)

    
    // console.log(2)
})

server.listen(3000)