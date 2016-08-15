var express = require('express');
var app = express(); //express app
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication, function (req, res) {
	res.send('Abous Us');
});

app.use(express.static(__dirname + '/public'));
//shows my website in node.js app

app.listen(PORT, function () {
	//Gets called once server starts
	console.log('Express server started on ' + PORT + '!');
});