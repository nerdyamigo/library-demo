var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment');

var AuthorSchema = Schema({
  first_name: {type: String, required: true, max: 100},
  family_name: {type: String, required: true, max: 100},
  date_of_birth: {type: Date},
  date_of_death: {type: Date},
});

// Virtual for authors full name
AuthorSchema
  .virtual('name')
  .get(function() {
    return this.family_name + ',' + this.first_name; 
  });

// Virtual for authors URL
AuthorSchema
  .virtual('url')
  .get(function() {
    return '/catalog/author/' + this._id; 
  });

// virtual for date formatted
AuthorSchema
  .virtual('date_formatted_born')
  .get(function() {
    return this.date_of_birth ? moment(this.date_of_birth).format('MMMM Do, YYYY') : ''; 
  });

AuthorSchema
  .virtual('date_formatted_death')
  .get(function() {
    return this.date_of_death ? moment(this.date_of_death).format('MMMM Do, YYYY') : ''; 
  });


// Export the model
module.exports = mongoose.model('Author', AuthorSchema);
