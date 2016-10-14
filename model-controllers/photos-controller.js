/**
 * http://usejsdoc.org/
 */
var db = require('../db.js')

exports.create = function(author, place, photoPath, done) {
  var values = [userId, text, photoPath, new Date().toISOString()];
  
  db.get().query('INSERT INTO photos (author, place, photo_path, upload_date) VALUES(?, ?, ?, ?)', values, function(err, result) {
    if (err) 
    	return done(err);
    done(null, result.insertId);
  });
};

exports.getAll = function(done) {
  db.get().query('SELECT * FROM photos', function (err, rows) {
    if (err) 
    	return done(err);
    done(null, rows);
  });
};
