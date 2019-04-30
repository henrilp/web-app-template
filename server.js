var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//Database connection
// app.use(function(req, res, next){
// 	res.locals.connection = mysql.createConnection({
// 		host     : 'localhost',
// 		user     : 'root',
// 		password : '',
// 		database : 'test'
// 	});
// 	res.locals.connection.connect();
// 	next();
// });

// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});

app.get('/test', function (req, res) {
    return res.send({ data: "hello world", message: 'hello' })
});

// set port
app.listen(8080, function () {
    console.log('Node app is running on port 3000');
});
module.exports = app;
