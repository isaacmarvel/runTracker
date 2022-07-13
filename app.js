const express = require('express');
const sqlite = require('better-sqlite3');
const app = express();
const port = 3000;
app.use(express.static('public')); //sets up middleware to send file automatically if it matches file in public directory
app.use(express.json()); //parses json into an object

function getInfo(db) { //research what these mean
    const stmt = db.prepare("SELECT date, speed, time FROM runInfo");
    const infoFromDb = stmt.all();
    return infoFromDb;
}; 

function initDb() { //creates the database table if it doesn't already exist
    let newString = `CREATE TABLE IF NOT EXISTS "runInfo" (
        "date"  TEXT NOT NULL, 
        "speed"    INTEGER NOT NULL,
        "time"    INTEGER NOT NULL,
        "id"    INTEGER,
        PRIMARY KEY("id")
    );`
    let db = sqlite("runInfo.db");
    db.prepare(newString)
    .run();
}; 

initDb();

app.get('/runInfo', (req, res) => {
    let db = sqlite("runInfo.db")
    let runInfoFromDb = getInfo(db);
    res.send(JSON.stringify(runInfoFromDb))
}); 

app.post('/runInfo', (req, res) => {
    let db = sqlite("runInfo.db")
    const stmt = db.prepare("insert into runInfo (date, speed, time) values (?, ?, ?);");
    const info = stmt.run(req.body.date, req.body.speed, req.body.time);
    let runInfoFromDb = getInfo(db);
    res.send(JSON.stringify(runInfoFromDb))
}); 

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
});