var express = require("express");

var request = require("request");

var app = express();



console.log("making a API request");
request("http://google.com", function(error, response, body){
    if(!error && response.statusCode==200){
        // var parsedBodyData = JSON.parse(body);
        console.log(body);
    }
})