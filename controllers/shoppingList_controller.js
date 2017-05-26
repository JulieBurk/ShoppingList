var express = require("express");

var router = express.Router();


var db = require ("../models");

// get function to generate unique url for each session
router.get("/", function (req, res) {
  var randomHash = Math.floor(Math.random() * 10000000);
  res.redirect("/" + randomHash);
});

// get function to retreive unique hash from sql
router.get("/:hash/", function(req, res){
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

	db.shoppingListTable.findAll({
    where: {
      hash: req.params.hash, // TODO: add column
    }
  }).then( function(data) {
	// wrapping the array of returned items in an object so it can be reffered to in handlebars index file
	var hbsObject = {
    shoppingListTable: data,
    fullUrl: fullUrl,
    hash: req.params.hash,
  };
	res.render("index", hbsObject);
	});
});

// post route -> back to index
router.post("/:hash/create", function(req, res) {
  console.log(req.body);
  // takes the request object using it as input for buger.addBurger
  db.shoppingListTable.create({
    item_name: req.body.item_name, 
    gotIt: req.body.gotIt,
    hash: req.params.hash,
  }).then(function(result) {
     // console.log(result);
    res.redirect("/"  +  req.params.hash);
  });
});

// put route -> back to index
router.put("/update", function(req, res) {
  db.shoppingListTable.update({gotIt:true},
    {where:{id: req.body.id}}).then(function(result) {
    // render back to main with handle
    console.log(result);
    res.redirect("/"  +  req.params.hash);
  });
});

module.exports = router;
