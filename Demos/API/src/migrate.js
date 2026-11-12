const path = require("path")
const fs = require("fs")
const dbloader = require("better-sqlite3")

const db = dbloader(
    path.join(__dirname, "../data.db")
);

const schema = fs.readFileSync(
    path.join(__dirname, "./schema.sql"), 
    "utf-8"
);

db.exec(schema);


