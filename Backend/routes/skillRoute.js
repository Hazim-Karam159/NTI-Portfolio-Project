const express=require('express');
const {createSkill,getSkills,updateSkill,deleteSkill}=require('../services/skillService');
const router=express.Router();

router.post("/",createSkill);
router.get("/",getSkills);
router.delete("/:id",deleteSkill);
router.put("/:id",updateSkill);

module.exports=router;