var Author = require('../models/author');

// Display list of all authors
exports.author_list = function(req, res) {
  res.send('NOT IMPLEMENTED: Author list');
};

// Displaydetails page for specific Author
exports.author_detail = function(req, res) {
  res.send('NOT IMPLEMENTED: Author detail');
};

// Display Author create form on GET
exports.author_create_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Author creae GET');
};
exports.author_create_post = function(req, res) {
  res.send('NOT IMPLEMENTED');
};

exports.author_delete_get = function(req, res) {
  res.send('NOT IMPLEMENTED');
};
// Handle author delete on POST
exports.author_delete_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Author delete POST');
};

// Display Author update form on GET
exports.author_update_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Author update GET');
};

// Handle Author update on POST
exports.author_update_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Author update POST');
};