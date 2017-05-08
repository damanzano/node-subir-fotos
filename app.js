/**
 * http://usejsdoc.org/
 */

// Importar módulos externos
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var multer = require('multer');
var cors = require('cors');

// Importar módulos locales
var databse = require("./database");
var photoRouter = require("./routes/photo-router");

// Crear nuestra aplicación express y comenzar a configurarla
var app = express();

// Configurar sistema de logging y conversión de datos
app.use(logger('dev'));

// Aceptar solicitudes en formato application/json
app.use(bodyParser.json());

// Aceptar solicitudes en formato application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended : false
}));

//Aceptar solicitudes desde otros dominios
app.use(cors());

// configurar donde iran nuestros archivos del front
app.use(express.static(__dirname + '/public'));

// Configurar donde carpeta temporal donde se guardaran las imágenes
app.use(multer({
	dest : './uploads/'
}).single('photo'));

// Configurar las rutas en archivos separados
app.use('/photos', photoRouter);

app.set('port', (process.env.PORT || 3000));

// Configurar la conexión a la base de datos
databse.connect(databse.MODE_PRODUCTION, function(err) {
	if (err) {
		// Si hubo errores cerrar la aplicación
		console.log('Unable to connect to MySQL.');
		process.exit(1)
	} else {
		// Si no hubo errores encender el servidor y comenzar a escuchar
		// solicitudes
		//var hostname = 'localhost';
		//var port = 3000;

		app.listen(app.get('port'), function() {
			console.log('Servidor corriendo en http://' + hostname + ':' + app.get('port')
					+ '/');
		});
	}
});
