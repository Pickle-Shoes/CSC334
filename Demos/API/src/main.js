const express = require("express")
const dbloader = require("better-sqlite3")

const db = dbloader("data.db") //path is relative to node or the root of our project

const app = express()
app.use(express.json())

app.get("/api/users/:id", (req, res) => {
    const id = parseInt(req.params.id)

    if(isNaN(id)){
        res.sendStatus(400);
        return;
    }

    const data = db.prepare("SELECT * FROM users WHERE id = ?")
        .get(id)

    if(!data){
        res.sendStatus(404);
    }else{
        res.send(data);
    }

})

// POST /api/users
// email: string
// username: string?

app.post("/api/users", (req, res) =>{
    // const id = parseInt(req.params.id)
    // const email = req.params.email
    // const username = req.params.username

    //input validation goes here

    const data = db.prepare("INSERT INTO users (email, username) VALUES ($email, $username)")
        .run({
            email: req.body.email,
            username: req.body.username
        })

        
    res.sendStatus(200)
})



app.listen(3000)