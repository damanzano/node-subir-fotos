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

// Configurar sistema de logging y conversión de datos
app.use(logger('dev'));
app.use(bodyParser.json());

// configurar donde iran nuestros archivos del front
app.use(express.static(__dirname + '/public'));

// Configurar donde carpeta temporarl donde se guardaran las imágenes
app.use(express.bodyParser({uploadDir:'./uploads'}));


// Encender el servidor y comenzar a escuchar solicitudes
var hostname = 'localhost';
var port = 3000;

app.listen(port, hostname, function(){
	console.log('Servidor corriendo en http://'+hostname+':'+port+'/');
});