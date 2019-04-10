var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("home");
});

app.get("/friends",function(req,res){
    var friends = ["Bidur","Ballu","dipesh","karun"];
    res.render("friendList", {friends: friends});
});


app.get("/love/:thing",function(req,res){
    var loveThing = req.params.thing;
    res.render("love", {varThing : loveThing});
});


app.get("/*", function(req,res){
    res.send("What are you donig with your life")
});

app.listen(3000, function(){
    console.log("SERVER has Started in port 3000")
});