var express = require("express");
var app = express();
app.set("view engine", "ejs");

app.get("/",function(req,res){
    res.render("landing");
});

app.get("/campgrounds",function(req,res){
    var campgrounds =[
        {name: "Liberty Park", image:"https://imgs.6sqft.com/wp-content/uploads/2018/08/16133426/Liberty-State-Park-view-of-freedom-tower.jpg"},
        {name: "Bryant Park", image:"https://bryantpark-prod.imgix.net/images/bryantpark_uploads/images/Park_carousel1.jpg"},
        {name: "Battery Park", image:"https://tclf.org/sites/default/files/microsites/landslide2017/img/batterypark/slide8-batterypark.jpg"}
    ]
    res.render("campgrounds", {campgrounds: campgrounds});
});


app.listen(3000, function(){
    console.log("Yelp camp server has STARTED!!!!")
})