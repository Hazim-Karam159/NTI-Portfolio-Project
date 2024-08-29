const express=require('express');
const {createExperience,getExperience,deleteExperience,updateExperience}=require('../services/expService');

const router=express.Router();


router.post("/",createExperience);
router.get("/",getExperience);
router.delete("/:id",deleteExperience);
router.put("/:id",updateExperience);

module.exports=router;