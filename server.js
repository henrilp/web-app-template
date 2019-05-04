var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//Database connection
var con = mysql.createConnection({
  database: "testECE",
  host: "localhost",
  user: "user",
  password: "pumasage1"
});

// res.locals.connection.query('SELECT * from members', function (error, results, fields) {
// 		if(error) throw error;
// 		return res.send(JSON.stringify(results));

function getCategoryOfProducts(category){
  return new Promise(function(resolve, reject){
    con.query("SELECT * FROM products WHERE category='"+ category +"'", function (err, result, fields) {
      if (err) reject(err);
      resolve(result)
    });
  })
}

function insert(table,product){
  //book = {name,price}
  return new Promise(function(resolve, reject){
    con.query("INSERT INTO "+table+" (name, price, category, url_photo, description) VALUES ('"+ product.name +"', '"+ product.price +"', '"+ product.category +"', '"+ product.urlPhoto +"', '"+ product.description +"')", function (err, result) {
      if (err) reject(err);
      resolve(result)
    });
  })
}

// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});

app.get('/books', async function (req, res) {
  let result;
  try{
    result = await getCategoryOfProducts("books")
  }catch(e){
    console.log(e)
  }

  return res.send(result)
});

app.post('/new_product', async function (req, res) {
  console.log('pinged at /new_product')
  let result;
  try{
    result = await insert('products',req.body)
  }catch(e){
    console.log(e)
  }
  console.log({result})
    return res.send(JSON.stringify(result));
});

// set port
app.listen(8080, function () {
    console.log('Node app is running on port 3000');
});
module.exports = app;
