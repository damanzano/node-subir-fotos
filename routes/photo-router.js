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
				console.log(req.file.originalname);
				console.log(req.file.filename);
				console.log(req.file.path);
				console.log(req.file.mimetype);
				console.log(req.file.size);
				var file = __dirname + "/" + req.file.name;
				res.end('Will add the photo: '+req.file.name+" " + req.body.author
						+ ' with details: ' + req.body.place);
			})

	return photoRouter;
})();