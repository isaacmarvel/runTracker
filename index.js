let express = require("express");
let app = express(); //creates an express application
let router = express.Router();

router.get("/", function(req, res, next) { //next is for middleware error handling
    res.send("Apple"); //whatever I want to be sent. Probably want this to send form data
});

app.use("/api/", router); //this will add /api/ onto the web path

var server = app.listen(5000, function () {
    console.log("Node server is running on http://localhost:5000..");
});

function openMenu() {
    let x = document.getElementById("myLinks");
     if (x.style.display === "block") {
       x.style.display = "none";
     } else {
      x.style.display = "block";
    }
} 