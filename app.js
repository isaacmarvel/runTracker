const express = require("express");
const sqlite = require("better-sqlite3");
const app = express();
const port = process.env.PORT || 3001; //when render deploys, can specify the port it wants to use. Will either use port variable,or 3001
app.use(express.static("public")); //sets up middleware to send file automatically if it matches file in public directory
app.use(express.json()); //parses json into an object

function getInfo(db) {
  const stmt = db.prepare("SELECT date, speed, time FROM runInfo");
  const infoFromDb = stmt.all();
  return infoFromDb;
}

function initDb() {
  //creates the database table if it doesn't already exist
  let newString = `CREATE TABLE IF NOT EXISTS "runInfo" (
        "date"  TEXT NOT NULL, 
        "speed"    INTEGER NOT NULL,
        "time"    INTEGER NOT NULL,
        "id"    INTEGER,
        PRIMARY KEY("id")
    );`;
  let db = sqlite("runInfo.db");
  db.prepare(newString).run();
}

initDb();

app.get("/run/info/:date", (req, res) => {
  let db = sqlite("runInfo.db");
  let runInfoFromDb = getInfo(db);
  res.send(JSON.stringify(runInfoFromDb));
});

app.post("/run/info", (req, res) => {
  let db = sqlite("runInfo.db");
  const stmt = db.prepare(
    "insert into runInfo (date, speed, time) values (?, ?, ?);"
  );
  const info = stmt.run(req.body.date, req.body.speed, req.body.time); 
  let runInfoFromDb = getInfo(db);
  res.send(JSON.stringify(runInfoFromDb));
});

app.listen(port, () => {
  console.log(` App listening on port ${port}`);
});
