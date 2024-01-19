const { default: mongoose } = require("mongoose");

const patientSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: String,
    note: String,
    // Other patient-related fields
  });
  
  module.exports = mongoose.model('patientSchema', patientSchema);