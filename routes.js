'use strict';

// Docs for how routes work:
// https://expressjs.com/en/guide/routing.html

var express = require('express');
var router = express.Router();

// GET
router.route('/hello')
    .get(function(req, res) {
        res.json('hello Matt!');
    });

// POST
// Usage example with html forms:
// http://code.runnable.com/U0sU598vXio2uD-1/example-reading-form-input-with-express-4-0-and-body-parser-for-node-js
router.route('/email')
    .post(function (req, res) {
        console.log(req.body);
        // This is where you will implement your email stuff!
    });

module.exports = router;
