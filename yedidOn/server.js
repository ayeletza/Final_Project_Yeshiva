//bs"d

var http = require('http'),
    fs = require('fs'),
    express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    url = require('url'),
    //qs = require('query-string'),
    mongoose = require("mongoose");
    var app = express();

    mongoose.connect("mongodb://yedidon:yedidON100@ds021356.mlab.com:21356/yedidondb");

var Schema = mongoose.Schema;

    var GraduateSchema = new Schema({
        firstName: String,
        lastName: String,
        id: String,
        phone: String,
        cellPhone: String,
        adress: String,
        email: String,
        course: String
    }, {collection: 'Graduate'});

	var DonateSchema = new Schema({
        id: String,
        date: String,
        sum: String,
        paymentWay: String,

    }, {collection: 'Donate'});

    var Graduate = mongoose.model('Graduate', GraduateSchema, 'graduates');
	var Donate = mongoose.model('Donate', DonateSchema, 'donates');

// APP CONFIGURATION------------------------------------------
// use body parser to grab information from POST
app.use(express.static(path.join(__dirname,'/img/')));
app.use(express.static(path.join(__dirname,'/html/')));
app.use(express.static(path.join(__dirname,'/js/')));
app.use(express.static(path.join(__dirname,'/js/vendor/')));
app.use(express.static(path.join(__dirname,'/css/')));
app.use(express.static(path.join(__dirname,'/fonts/')));
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

app.post('/CreateGraduate', function (req, res) {
    Graduate.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        id: req.body.id,
        phone: req.body.phone,
        cellPhone: req.body.cellPhone,
        address: req.body.address,
        email: req.body.email,
        course: req.body.year

    }, function (err, data) {
        if (err) return console.error(err);

        res.send("פרטי הבוגר נרשמו בהצלחה!");
    });
});

app.post('/CreateDonate', function (req, res) {
    Donate.create({
        id: req.body.id,
        date: req.body.date,
        sum: req.body.sum,
        paymentWay: req.body.paymentWay

    }, function (err, data) {
        if (err) return console.error(err);

        res.send("פרטי התרומה נרשמו בהצלחה!");
    });
});
app.get('/GetGraduates', function (req, res) {
    Graduate.find( function(err, data)
        {
            if(err)
                return console.error(err);
            res.send(data);
        }
    );
});

app.listen(8080);