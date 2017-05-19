// test function for testing framework
var juliesFunction = function(name){
	if (name == "julie"){
		return true
	}
	else {
		return false
	}
}

module.exports = juliesFunction;

// test function
// app.get("/", function(req, res){
// 	res.redirect("/listPage");
// });

// app.get should return data from sql via sequelize orm

var getFunction = function(data){
	if (data === "stuff"){
		return true
	}
	else {
		return false
	}
}
module.exports = getFunction;