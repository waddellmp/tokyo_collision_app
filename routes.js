'use strict';

// Docs for how routes work:
// https://expressjs.com/en/guide/routing.html

var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var path = require('path');
var routes = require('./routes');
var bodyParser = require('body-parser');

// GET
router.route('/hello')
    .get(function (req, res) {
        res.json('hello Matt!');
    });

// POST
// Usage example with html forms:
// http://code.runnable.com/U0sU598vXio2uD-1/example-reading-form-input-with-express-4-0-and-body-parser-for-node-js
router.route('/email')
    .post(function (req, res) {

        //Routes HTTP POST requests to /email path on the server then executes the callback function


        //@post store the formData in a user_input object
        function user_input() {
            return {
                first_name: req.body.firstname,
                last_name: req.body.lastname,
                email: req.body.email,
                phone: req.body.phone,
                brand: req.body.brand,
                model: req.body.model,
                year: req.body.year,
                body: req.body.styleb,
                comments: req.body.comments,

                msgOwner: (function () {
                    var msg =
                        "<label>First name: </label>" + req.body.firstname + "<br>" +
                        "<label>Last name: </label>" + req.body.lastname + "<br>" +
                        "<label>Email: </label>" + req.body.email + "<br>" +
                        "<label>Phone: </label>" + req.body.phone + "<br>" +
                        "<label>Brand: </label>" + req.body.brand + "<br>" +
                        "<label>Model: </label>" + req.body.model + "<br>" +
                        "<label>Year: </label>" + req.body.year + "<br>" +
                        "<label>Body Style: </label>" + req.body.styleb + "<br>" +
                        "<label>Comments: </label>" + req.body.comments + "<br>";
                    return msg;
                }())
            };

        };
        //use a constructor function to 
        var input = new user_input();

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
            from: input.firstname + " " + input.lastname,
            to: "waddellmp08@gmail.com",
            subject: "Tokyo Art Collision - Inquiry",
            text: input.comments,
            html: input.msgOwner
        }

        //send email with defined transport object
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);
        });
    });


module.exports = router;
