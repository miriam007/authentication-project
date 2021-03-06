const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  userId: {
    type: String,
  },

  role: {
    type:String,
  },

  level: {
    type: String,
    required: true
  },
  
  name: {
    type: String
  },

  aboutMe: {
    type: String
  },

  learningStyle: {
    type: String
  },

  strengths: {
    type: String
  },

  weaknesses: {
    type: String
  }

});

module.exports = mongoose.model("Student", studentSchema);