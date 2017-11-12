var mongoose = require('mongoose');

var schema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: false
  },
  description: {
    type: String,
    required: true
  }
});

mongoose.model('Job', schema);