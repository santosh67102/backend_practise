var app = require("express")();
app.set("view engine", "ejs");

app.get("/",function(req,res){
    res.render("home");
});

app.get("/friends",function(req,res){
    res.render("friendList");
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