const express=require('express');
const {createContact,getContacts,updateContact,deleteContact}=require('../services/contactService');
const router=express.Router();

router.post("/",createContact);
router.get("/",getContacts);
router.delete("/:id",deleteContact);
router.put("/:id",updateContact);

module.exports=router;