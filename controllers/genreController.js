var Genre = require('../models/genre');

// Display list of all genres
exports.genre_list = function(req, res, next) {
  Genre.find()
    .sort([['name', 'ascending']])
    .exec(function(err, list_genre) {
      if (err) { next(err); }
      // success render 
      res.render('genre_list', { title: 'Genre List', genre_list: list_genre}); 
    });
};

// Display detail page for a specific genre
exports.genre_detail = function(req, res) {
  res.send('NOT IMPLEMENTED: Genre details: ' + req.params.id);
};

// Display Genre create form on GET
exports.genre_create_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Genre create on GET');
};

// Handle Genre create on POST
exports.genre_create_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Genre create POST');
};

// Display Genre delete form on GET
exports.genre_delete_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Genre delete GET');
};

// Handle Genre delete on POST
exports.genre_delete_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Genre delete POST');
};

// Display Genre update form on GET
exports.genre_update_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Genre update GET');
};

// Handle Genre update on POST
exports.genre_update_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Gnre update POST');
};
