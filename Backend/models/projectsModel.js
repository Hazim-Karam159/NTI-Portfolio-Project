const mongoose=require('mongoose');
const projectSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        required:true,
        type:String
    },
    link:{
        type:String
    },
    languages:{
        type:Array,
        required:true
    },
    id:{
        type:Number,
        index:true,

    },
    role:{
        type:Array  ,
        required:true
    },
   tools: {
        type: Array,
        required: true,
    }

})
const projectModel= mongoose.model("projects",projectSchema);

module.exports=projectModel;