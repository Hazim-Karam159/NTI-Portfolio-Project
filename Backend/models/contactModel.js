const mongoose = require("mongoose");
const contact = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  link:{
    type:String,
    required:true
  }
});
const contactModel = mongoose.model("contacts", contact);

module.exports = contactModel;
