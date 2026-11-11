//server side js
const express = require("express")
// const http = require("http")
// const fs = require("fs")
const path  = require("path")

const app = express()

 //used to find static files and not allow access to other static files outside the specified directory
app.use(express.static( 
    path.join(__dirname, "./public")
))

app.use(express.json())

// app.get("/Home", (_req, res) => { // _ in front of variable indicates it is not being used
//     res.sendFile(path.join(__dirname, "./public/index.html"))
// })


//example.com/api/v1
//api.example.com/v1

app.get("/api/users", (req, res) => {
    res.send({
        id: 1,
        username: "Billy"
    })
})


app.put("/api/users/:id", (req, res) => {
    const id = parseInt(req.params.id)
    

    if(isNaN(id)){
        res.sendStatus(400)
    }

    res.send({
        id, 
        username: req.body.username
    })
})

app.listen(3000)

//req is request, res is response
// const server = http.createServer((req, res) => {
//     // console.log(req)

//     const p = path.join(__dirname, "./public/index.html") //dirname gets absolute path to current file
//     // console.log(p)
//     const file = fs.readFileSync(path.join(__dirname,"./public/index.html"))
//     res.writeHead(200).end(file)

    
//     // console.log(2)
// })

//server.listen(3000)




//SELECT * FROM users WHERE email = 'a@b.c';

const email = "a@b.c'; DROP TABLE users"


//prepared statement to procect against sql injection -- $1 tells sql we are inputting a value and will not treat the inputted value as sql commands
exec("SELECT * FROM users WHERE email = $1")

