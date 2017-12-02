var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var config = require("./config");
var morgan = require("morgan");
var mongoose =require("mongoose");
app.use("/",express.static(__dirname + "/public"));
app.set("view engine","ejs");
app.set("views","views");
app.listen(process.env.PORT || 3000);


mongoose.connect(config.getDbConnectionString());
app.get("/film/createFilm",function(req,res){
    res.render("index");
});