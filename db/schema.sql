CREATE DATABASE IF NOT EXISTS shoppingList_db;
USE shoppingList_db;

# If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS shoppingListTable;

# Create the table
CREATE TABLE shoppingListTable (
id int NOT NULL AUTO_INCREMENT,
item_name varchar(255) NOT NULL,
gotIt BOOL DEFAULT false,
PRIMARY KEY (id)
);
