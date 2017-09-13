var BookInstance = require('../models/bookinstance');

// Display list of all book instances
exports.bookinstance_list = function(req, res, next) {

  BookInstance.find()
    .populate('book')
    .exec(function (err, list_bookinstances) {
      if (err) { return next(err); }
      // Successful, so render
      res.render('bookinstance_list', { title: 'Book  Instance List', bookinstance_list: list_bookinstances });
    });
};

// Display detail page for a specific Book Instance
exports.bookinstance_detail = function(req, res, next) {
  BookInstance.findById(req.params.id)
  .populate('book')
  .exec(function(err, bookinstance) {
    if(err) {return next(err); }
    res.render('bookinstance_detail', {title: 'Book', bookinstance: bookinstance});
  })
};

// Display BookInstance create form on GET
exports.bookinstance_create_get = function(req, res) {
  res.send('NOT IMPLEMENTED: BookInstance create GET');
};

// Handle BookInstance create on POST
exports.bookinstance_create_post = function(req, res) {
  res.send('NOT IMPLEMENTED: BookInstane create POST');
};

// Display BookIstance delete form on GET
exports.bookinstance_delete_get = function(req, res) {
  res.send('NOT IMPLEMENTED: BookInstance delete GET');
};

// Handle BookInstance delete on POST
exports.bookinstance_delete_post = function(req, res) {
  res.send('NOT IMPLEMENTED: BookInstance delete POST');
};

// Display BookInstance update form on GET
exports.bookinstance_update_get = function(rq, res) {
  res.send('NOT IMPLEMENTED: BookInstance update GET');
};

// Handle bookInstance update on POST
exports.bookinstance_update_post = function(req, res) {
  res.send('NOT IMPLEMENTED: BookInstance update POST');
};
