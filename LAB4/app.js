
var express = require('express');
var app = express();

app.use(express.static('./'));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
	res.send('hello world');
});


// POST method route
app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});

