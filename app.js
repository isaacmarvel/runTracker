const express = require('express');
const sqlite = require('better-sqlite3');
const app = express();
const port = 3000;
// const port = process.env.PORT || 3001; will need these two lines for when I deploy this, apparently
app.use(express.static('public')); //sets up middleware to send file automatically if it matches file in public directory
app.use(express.json()); //parses json into an object

function getInfo(db) { 
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

app.get('/run/info/:date', (req, res) => { //Could change to /run/info/:date. ":date" says whatever I pass in will be assigned to date proeprty
    // req.params.date(maybe not right) would give an object with date property
    let db = sqlite("runInfo.db")
    let runInfoFromDb = getInfo(db);
    res.send(JSON.stringify(runInfoFromDb))
}); 

app.post('/run/info', (req, res) => {
    let db = sqlite("runInfo.db")
    const stmt = db.prepare("insert into runInfo (date, speed, time) values (?, ?, ?);");
    const info = stmt.run(req.body.date, req.body.speed, req.body.time); //could add as query parameters onto the get side. Example: or, could do run/date and fetch everything from that date
    let runInfoFromDb = getInfo(db);
    res.send(JSON.stringify(runInfoFromDb))
}); 

app.listen(port, () => {
    console.log(` App listening on port ${port}`)
});
// api design: instead of /runInfo working like a js variable, have it run instead like a weblink works. /run/info

//would need server also live, so app.js is also live
//if you connect to a database, gonna need some code changes
//