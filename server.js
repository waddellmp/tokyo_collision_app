'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes');
var path = require('path');

var app = express();

// Serve static content.
var static_path = path.join(__dirname, 'dist/');
app.use(express.static(static_path));

// Configure bodyparser.
// This allows us to get the json from a POST.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configure API.
app.use('/api', routes);

// Turn it on.
app.listen(8080, function () {
    console.log('Server listening on port 8080.');
});