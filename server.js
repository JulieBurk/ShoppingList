var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// require models for syncing
var db = require("./models")

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/shoppingList_controller");

// get route -> index
/*
app.get("/", function(req, res){
	res.redirect("/listPage");
});
*/

app.use("/", routes);

// listen on port 3000
var port = process.env.PORT || 3000;


// sync with database then listen
db.sequelize.sync({ force:true }).then(function(){
	app.listen(port);
})





