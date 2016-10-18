/**
 * http://usejsdoc.org/
 */
var express = require('express');
var bodyParser = require('body-parser');
var photosController = require('../model-controllers/photos-controller');
var fs = require('fs');

module.exports = (function() {
	var photoRouter = express.Router();

	photoRouter.use(bodyParser.json());

	photoRouter.route('/')

	.get(function(req, res, next) {
		photosController.getAll(function(error, photos) {
			if (!error) {
				res.json(photos);
			}
		});
	})

	.post(
			function(req, res, next) {
				console.log(req.file.originalname);
				console.log(req.file.filename);
				console.log(req.file.path);
				console.log(req.file.mimetype);
				console.log(req.file.size);

				// Guardar el archivo en la ubicacion final
				var targetPath = './public/images/' + req.file.filename;
				fs.rename(req.file.path, targetPath, function(err) {
					if (err)
						throw err;
					/*
					 * Borrar el archivo temporal, para que el servidor no se
					 * llene 
					 */
					fs.unlink(req.file.path, function(err) {
						if (err)
							console.log(err);
					});

					// Hacer el registro en base de datos
					photosController.create(req.body.author, req.body.place,
							'images/' + req.file.filename,
							function(err, result) {
								if (err)
									throw err;
								res.redirect('/');
							});
				});
			});

	return photoRouter;
})();