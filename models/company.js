const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const companySchema = new Schema({
  name: { type: String },
  logo: { type: String },
  description: { type: String },
  active: Boolean
});


module.exports = mongoose.model('Company', companySchema);