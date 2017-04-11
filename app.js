var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var campgrounds = [
        {name: "Sabine Creek", image: "http://www.toledo-bend.com/toledo_bend/images/IMG_078527w.jpg"},
        {name: "Brazos Trail", image: "http://www.toledo-bend.com/toledo_bend/images/IMG_078527w.jpg"},
        {name: "Red River Gorge", image: "http://www.toledo-bend.com/toledo_bend/images/IMG_078527w.jpg"},
        {name: "Sabine Creek", image: "http://www.toledo-bend.com/toledo_bend/images/IMG_078527w.jpg"},
        {name: "Brazos Trail", image: "http://www.toledo-bend.com/toledo_bend/images/IMG_078527w.jpg"},
        {name: "Red River Gorge", image: "http://www.toledo-bend.com/toledo_bend/images/IMG_078527w.jpg"},
        {name: "Sabine Creek", image: "http://www.toledo-bend.com/toledo_bend/images/IMG_078527w.jpg"},
        {name: "Brazos Trail", image: "http://www.toledo-bend.com/toledo_bend/images/IMG_078527w.jpg"},
        {name: "Red River Gorge", image: "http://www.toledo-bend.com/toledo_bend/images/IMG_078527w.jpg"},
        {name: "Sabine Creek", image: "http://www.toledo-bend.com/toledo_bend/images/IMG_078527w.jpg"},
        {name: "Brazos Trail", image: "http://www.toledo-bend.com/toledo_bend/images/IMG_078527w.jpg"},
        {name: "Red River Gorge", image: "http://www.toledo-bend.com/toledo_bend/images/IMG_078527w.jpg"}
    ] 

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res){
   res.render("landing"); 
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req,res){
   res.render("new.ejs"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("the road to hell is paved with good servers"); 
});