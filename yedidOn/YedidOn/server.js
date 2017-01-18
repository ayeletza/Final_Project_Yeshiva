//bs"d
var http = require('http'),
    fs = require('fs'),
    express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    url = require('url');
var app = express();



// APP CONFIGURATION------------------------------------------
// use body parser to grab information from POST
app.use(express.static(path.join(__dirname,'/img/')));
app.use(express.static(path.join(__dirname,'/html/')));
app.use(express.static(path.join(__dirname,'/js/')));
app.use(express.static(path.join(__dirname,'/css/')));
app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());

// configure app to handle CORS requests
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Orgin','*');
    res.setHeader('Access-Control-Allow-Method','GET,POST');
    res.setHeader('Access-Control-Allow-Headers','X-Request-With,content-type,Authorization');
    next();
});
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(8080);