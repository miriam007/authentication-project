const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tutorSchema = new Schema({
  level: {
    type: String,
    required: true
  },

  aboutMe: {
    type: String
  },

  teachingStyle: {
    type: String
  },

  strengths: {
    type: String
  },

  contactMe: {
    type: String,
    required: true
  }
  
});

module.exports = mongoose.model("Tutor", tutorSchema);