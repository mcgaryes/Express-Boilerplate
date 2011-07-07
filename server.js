// constants
var PORT = 8080;

// imports
var express = require('express'); // http server
var app = express.createServer(); 
// var data = require('data'); // couchdb helper

// configuration
app.configure(function() {
	app.use(express.methodOverride());
	app.use(express.bodyParser());
	app.use(express.logger());
	app.use(express.static(__dirname + "/static"));
});

//ejs config
var ejs = require('ejs');
ejs.open = '{{';
ejs.close = '}}';

// routes
require('./routes/home')(app);
require('./routes/404')(app);

// start
app.listen(PORT);

// output
console.log('Running on port ' + PORT);
