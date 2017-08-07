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



//Routes HTTP POST requests to /email path on the server then executes the callback function
app.post('/email', function (req, res) {
    
    res.sendFile(path.join(static_path,'index.html'));
    //@post store the formData in a user_input object
    function user_input() {
        return {
            first_name: req.body.firstname,
            last_name: req.body.lastname,
            email: req.body.email,
            phone: req.body.phone,
            comments:req.body.comments
        };

    };
    //use a constructor function to 
    var req_body = new user_input();

    'use strict'
    //create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // secure:true for port 465, secure:false for port 587
        auth: {
            user: 'waddellmp08@gmail.com',
            pass: 'Hoops2008'
        }
    });

    //setup e-mail data with unicode symbols
    var mailOptions = {
        from: "tokyo_art_collision",
        to: "waddellmp08@gmail.com",
        subject: "Tokyo Art Collision - Inquiry",
        text: req_body.comments,
        html: '<p>'+req_body.comments+'</p>'
    }

    //send email with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });





});



// Turn it on.
app.listen(8080, function () {
    console.log('Server listening on port 8080.');
});