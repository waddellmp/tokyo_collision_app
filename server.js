'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes');
var path = require('path');
var nodemailer = require('nodemailer');
var app = express();

// Serve static content.
// https://expressjs.com/en/starter/static-files.html
var static_path = path.join(__dirname, 'dist/');
app.use(express.static(static_path));

// Configure bodyparser.
// This is simply an express plugin that allows us to get the JSON out of a POST.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure API
app.use('/api', routes);






// Turn it on.
app.listen(8080, function () {
    console.log('Server listening on port 8080.');
});