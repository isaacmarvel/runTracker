let express = require("express");
let app = express(); //creates an express application
// let router = express.Router();
const port = 3000;
//sqllite middleware, lets you exectue command in js and sends stuff to database


// app.use("/api/", router); //this will add /api/ onto the web path
app.use(express.static("public"))
let cats = ["chai", "zelda"];

app.get("/cats", (req, res) => {
    res.send(JSON.stringify(cats))
});

app.post("/cats", (req, res) => { //can use insomnia to send a request, but can also do without
    let newCat = req.body.cat;
    cats.push(newCat);
    console.log("Added new cat", cats);
    res.send(JSON.stringify(cats));
});

// router.get("/", function(req, res, next) { //next is for middleware error handling
    // res.send(JSON.stringify(cats)); //whatever I want to be sent. Probably want this to send form data
// });


// var server = app.listen(5000, function () {
    // console.log("Node server is running on http://localhost:5000..");
// });
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})