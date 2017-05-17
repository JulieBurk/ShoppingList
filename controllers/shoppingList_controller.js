var express = require("express");

var router = express.Router();


var db = require ("../models")

router.get("/", function(req, res){
	db.shoppingListTable.findAll().then( function(data) {
	// wrapping the array of returned items in an object so it can be reffered to in handlebars index file
	var hbsObject = { shoppingListTable: data };
	res.render("index", hbsObject);
	});
});

// post route -> back to index
router.post("/create", function(req, res) {
  console.log(req.body);
  // takes the request object using it as input for buger.addBurger
  db.shoppingListTable.create({
    item_name: req.body.item_name, 
    gotIt: req.body.gotIt,
  }).then(function(result) {
     // console.log(result);
    res.redirect("/listPage");
  });
});

// put route -> back to index
router.put("/update", function(req, res) {
  db.shoppingListTable.update({gotIt:true},
    {where:{id: req.body.id}}).then(function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/listPage");
  });
});

module.exports = router;
// db.burgers.update({devoured:true},{where:{id: req.body.burger_id}}).then(function(result) { /* ... */ });