var express = require("express");
var request = require("request");
var app = express();

request("http://www.omdbapi.com/?t=titanic&y=1997", function(error, response, body){
    console.log(body);
        if(!error && response.statusCode == 200){
            console.log(body);
        }
    })
app.get("/results", function(req,res){
    
    res.send("hello, it works");
});





app.listen(3000, function(){

    console.log("MOVIE APP has Started!!!!! ******");
}); 
// console.log("making a API request");
// request("http://google.com", function(error, response, body){
//     if(!error && response.statusCode==200){
//         // var parsedBodyData = JSON.parse(body);
//         console.log(body);
//     }
// })