const express=require('express');
const {createEducation,getEducaiton,deleteEducation,updateEducation}=require('../services/educationService');
const router=express.Router();

router.post("/",createEducation);
router.get("/",getEducaiton);
router.delete("/:id",deleteEducation);
router.put("/:id",updateEducation);

module.exports=router