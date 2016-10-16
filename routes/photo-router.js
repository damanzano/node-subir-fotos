/**
 * http://usejsdoc.org/
 */
var express = require('express');
var bodyParser = require('body-parser');
var photosController = require('../model-controllers/photos-controller');

module.exports = (function() {
	var photoRouter = express.Router();

	photoRouter.use(bodyParser.json());

	photoRouter.route('/')

	.get(function(req, res, next) {
		photosController.getAll(function(error, photos){
			if(!error){
				res.json(photos);
			}
		});
	})

	.post(
			function(req, res, next) {
				console.log(req.files.file.name);
				console.log(req.files.file.path);
				console.log(req.files.file.type);
				var file = __dirname + "/" + req.files.file.name;
				res.end('Will add the dish: ' + req.body.name
						+ ' with details: ' + req.body.description);
			})

	return photoRouter;
})();