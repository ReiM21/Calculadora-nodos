var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 8080;  //  Define como puerto el 8080

app.configure(function() {
  app.use(express.static(__dirname + '/')); //  Es el paso mas importante, permite que el usuario accede las paginas HTML
  app.use(express.logger('dev'));
  app.use(express.methodOverride());
});

var bodyParser = require('body-Parser');  //  Permite que el usuario envie datos
app.use(bodyParser.json({limit: '50mb'})); //  Define el limite que puede subir el usuario
app.use(bodyParser.urlencoded({limit : '50mb' , extended : true}));

require('./routes.js')(app);  //  Todavia no esta hecha la libreria

app.listen(port); //  Constantemente escucha los eventos del puerto
console.log("App por el puerto " + port); //  Nos hace saber si se usa ese puerto
