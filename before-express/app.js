var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send('Hi this is the Home page ');
});
app.get("/bye", function(req, res){
    res.send('goodbye');
});


app.get("/speak/:animal", function(req, res){
    var sounds = {
        cow :"moo moo",
        pig: "oink oink",
        dog:"woff woff",
        cat: "meow meow",
        horse:"hrrff hrrff"
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
  
    res.send("The "+animal+ ' says --> '+ sound);
    });

app.get("/repeat/:param1/:param2", function(req,res){
var param1 = req.params.param1;
var param2= Number(req.params.param2);
var result = " "; 
for( var i=0; i<param2; i++){
        result += (" " + param1);
};
res.send(result);
});

app.get("/*", function(req, res){
    res.send('ERROR:404 Page cannot be found');
});

app.listen(3000,function(){
console.log("SERVER HAS STARTED ON PORT 3000");
});