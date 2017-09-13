var mongoose = require('mongoose');
var moment = require('moment');

var Schema = mongoose.Schema;

var BookInstanceSchema = Schema({
  book: { type: Schema.ObjectId, ref: 'Book', required: true}, // ref to the associated book
  imprint: { type: String, required: true },
  status: { type: String, required: true, enum: ['Available', 'Maintance', 'Loaned', 'Reserved'], default: 'Maintance'},
  due_back: { type: Date, default: Date.now},
});

// Virtual for bookinstance URL
BookInstanceSchema 
  .virtual('url')
  .get(function() {
    return '/catalog/bookinstance/' + this._id;
  });

// Vritual for date
BookInstanceSchema
  .virtual('due_back_formatted')
  .get(function() {
    return moment(this.due_back).format('MMMM Do, YYYY');
  });

// Export model
module.exports = mongoose.model('BookInstance', BookInstanceSchema);

