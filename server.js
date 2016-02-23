var express = require('express');   

var app = express();                
var bodyParser = require('body-parser');
var controllers = require('./app/controllers');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;   

var router = express.Router();              

controllers.init(router);

app.use('/api', router);

app.listen(port);