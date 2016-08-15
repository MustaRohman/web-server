var express = require('express');
var app = express(); //express app
var PORT = 3000;

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('Private route hit');
		next();
	},
	logger: function (req, res, next) {
		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication, function (req, res) {
	res.send('Abous Us');
});

app.get('/contact', function (req, res) {
	res.send('Contact');
});

app.get('/projects', function (req, res) {
	res.send('Projects');
});

app.use(express.static(__dirname + '/public'));
//shows my website in node.js app

app.listen(PORT, function () {
	//Gets called once server starts
	console.log('Express server started on ' + PORT + '!');
});