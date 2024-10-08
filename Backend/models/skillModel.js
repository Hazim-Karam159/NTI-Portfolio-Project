const mongoose=require('mongoose');
const skill=mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    category:{
        required:true,
        type:String,
        // enum: ["Backend", "Frontend", "Programming Languages"]
    }
})
const skillModel= mongoose.model("skills",skill);

module.exports=skillModel;