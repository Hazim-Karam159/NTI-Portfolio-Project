const mongoose = require("mongoose");
const aboutScheme = mongoose.Schema({
 about:{
    type:String,
    required:true
 }
});

const aboutModel = mongoose.model("about", aboutScheme);
module.exports = aboutModel