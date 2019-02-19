var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 8080; //Las peticiones las va a cumplir solo por el puerto 8080

app.configure(function() {
  app.use(express.static(__dirname + '/')); //Acesso del usuario a las pags HTML
  app.use(express.logger('dev'));
  app.use(express.methodOverride());
});

var bodyParser = require('body-parser'); //Envio de datos
app.use(bodyParser.json({limit: '50mb' , extended: true})); //Limite de mb que se pueden subir
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
require('./routes.js')(app);

app.listen(port); //Escucha las peticiones del puerto
console.log("App por el puerto " + port); //Uso del puerto
