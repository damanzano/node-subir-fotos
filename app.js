/**
 * http://usejsdoc.org/
 */

// Importar módulos externos
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mysql = require("mysql");

// Importar módulos locales
var imageRouter = requires("./routers/imageRouter");

// Crear nuestra aplicación express y comenzar a configurarla
var app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

// configurar donde iran nuestros archivos del front
app.use(express.static(__dirname + '/public'));

// Encender el servidor y comenzar a escuchar solicitudes
var hostname = 'localhost';
var port = 3000;

app.listen(port, hostname, function(){
	console.log('Servidor corriendo en http://'+hostname+':'+port+'/');
});