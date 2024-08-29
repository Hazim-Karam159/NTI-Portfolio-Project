const mongoose = require("mongoose");
const educationScheme = mongoose.Schema({
  college: {
    type: String,
    required: true,
  },
  department:{
    type:String,
    required:true
  },
  university: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  fromDate: {
    type: String,
    required: true,
  },
  toDate: {
    type: String,
    required: true,
  },
  CumulativeGrade:{
    type:String,
    required:true
  }
});

const educationModel = mongoose.model("education", educationScheme);
module.exports = educationModel