const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tutorSchema = new Schema({
  userId: {
    type: String,
  },

  role: {
    type:String,
  },
  
  level: {
    type: Array,
  },

  name: {
    type: String
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