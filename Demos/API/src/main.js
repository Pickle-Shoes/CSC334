const express = require("express")
const dbloader = require("better-sqlite3")
const e = require("express")

const db = dbloader("data.db") //path is relative to node or the root of our project

const app = express()
app.use(express.json())
app.use(express.static("src/public"))

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
    if (!req.body || !req.body.email){
        res.sendStatus(400)
        return
    }

    try{
        //error prone code 
        //code that relies on that
        
        const data = db.prepare("INSERT INTO users (email, username) VALUES ($email, $username)")
        .run({
            email: req.body.email,
            username: req.body.username
        })
        
        const user = db.prepare("SELECT * FROM users WHERE id = ?")
        .get(data.lastInsertRowid)        
        
        
        if(!user){
            res.sendStatus(404)
        }else{
            res.send(user)
        }
    } catch(err){
        console.log(err)
    
        if(err.code == "SQLITE_CONSTRAINT_UNIQUE"){
            res.status(400).send("resource already exists")
        }else{
            res.sendStatus(500)
        }
    }
})
    
    
    
app.listen(3000)


// fetch().then((data) => {
//     console.log(1)
// }).catch((err) => {
    
// })

// console.log(2)