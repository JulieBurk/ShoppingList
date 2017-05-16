

module.exports = function(sequelize, DataTypes){
  var shoppingListModel = sequelize.define("shoppingListTable", {
    item_name: DataTypes.STRING,
    gotIt:{
    	type: DataTypes.BOOLEAN,
    	defaultValue: false
    }
    
    });

  return shoppingListModel;
}

