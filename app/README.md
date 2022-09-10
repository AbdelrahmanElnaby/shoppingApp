Routes:
POST  http://localhost:3000/store/usrs   // create user 
{
����"firstName":�"yomna",
����"lastName":�"samweeh",
����"password":�"ab1234ds"
}

The created user

POST http://localhost:3000/store/authontication        // authenticate  a user , returns token in header , returns  �� success�  in body if the user found
{
����"firstName":�"yomna",
����"lastName":�"samweeh",
����"password":�"ab1234ds"
}
�success�
GET http://localhost:3000/store/usrs   // list the users , returns token in header , , require token in header
=>array of users	
GET http://localhost:3000/store/usrs/id  // a user , returns token in header , , require token in header
=> user of that id
PUT http://localhost:3000/store/usrs/id  // update a user values , returns token in header , require token in header
The updated user
POST http://localhost:3000/store/products/  //create product , returns the create product , requires token in header , returns token
{
����"name":�"salamon",
����"price":�"20"
}

The created product
GET http://localhost:3000/store/products/   // returns list of products , 
=>list of products
GET http://localhost:3000/store/products/id   // returns a products , 
=>a product
PUT http://localhost:3000/store/products/id  // update a product  , returns the updated product , returns token in header, requires token in header
{
����"name":�"milk",
����"price":�"10"
}
 
=>the updated product
POST http://localhost:3000/store/orders  // create an order , returns the created order , requires token , returns token
{
����"user_id":�1,
����"status":�"active"
}
The created order
GET http://localhost:3000/store/orders    //returns list of orders , require token , returns token
=>list of orders

PUT http://localhost:3000/store/orders/id  // update an order , returns the updated order , requires token , returns token
{
����"user_id":�1,
����"status":�"complete"
}
The updated order
POST http://localhost:3000/store/orders/id/products   // add products to an order , returns the added product , requires token , returns token
{
����"product_id":�1,
����"quantity":�5
}
=>the added orderProducts
GET http://localhost:3000/store/dashboard/currentUserOrder/id      // returns currentOrder for a user , requires token , returns token
{
����"product_id":�1,
����"quantity":�5
}
=>the order for the a user

note: delete endpoints are provided

How to run:
1)create database shopping && shopping_test
	1) create database shopping;
	2)  create database shopping_test
2)
npm install  => to install all packages
npm run test  => to run the tests
npm run db  => to run migrations an build the tables for database
npm run dev  => to run the server in ts
npm run build => to run the server in js
npm run migrate => to drop the tables that have been migrated 

.env file
SERVER_PORT=3000
POSTGRES_HOST=127.0.0.1
POSTGRES_DB=shopping
POSTGRES_DB_test=shopping_test
POSTGRES_USER=shopping_user 
POSTGRES_PASSWORD=password123
pepper=first-web-app
saltRound=10
ENV=dev
secret_key=ihqMFzshwpGiuMMxQIClgRVY3c8L_YY3-7MLZpp6YA0


PORTS:

DB:5432
SERVER:3000


database schema:

CREATE TABLE products (id SERIAL PRIMARY KEY,
� � name VARCHAR(20) NOT NULL , 
� � price INTEGER NOT NULL);
CREATE TABLE usrs (id SERIAL PRIMARY KEY,
� � firstName VARCHAR(20) NOT NULL,
� � lastName VARCHAR(20) NOT NULL,
� � passwd TEXT NOT NULL,
� � UNIQUE(firstName,lastName) );


CREATE TABLE orders (
� � id SERIAL PRIMARY KEY,
� � user_id INTEGER,
� � status VARCHAR(10) NOT NULL,
� � FOREIGN KEY (user_id) � � 
� � REFERENCES usrs(id) ON DELETE SET NULL);


CREATE TABLE order_products (
� � order_id BIGINT NOT NULL,
� � product_id BIGINT NOT NULL,
� � quantity INTEGER NOT NULL,
� � PRIMARY KEY(order_id,product_id),
� � FOREIGN KEY (order_id) REFERENCES orders(id)
� � �ON DELETE CASCADE,
� � FOREIGN KEY (product_id) REFERENCES products(id)
� � �ON DELETE CASCADE � �
);



Drop tables:

DROP TABLE products;
DROP TABLE usrs;
DROP TABLE orders;
DROP TABLE order_products;







