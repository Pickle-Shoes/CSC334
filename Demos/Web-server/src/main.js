//server side js
const http = require("http")

//req is request, res is response
const server = http.createServer((req, res) => {
    // console.log(req)
    res.writeHead(200).end()
})

server.listen(3000)