//server/server.js
var express = require('express');
var router = require('./routes/routes.js')
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));

mongoose.connect('mongodb://admin:Bigsick12@ds259499.mlab.com:59499/mentor-react');

app.use('/', router);

module.exports = app;