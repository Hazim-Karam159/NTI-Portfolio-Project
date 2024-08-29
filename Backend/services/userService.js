const User = require('../models/userModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.createUser = async (req,res)=>{
    try{
    const {username,password} = req.body;
    const hashedPassword = await bcrypt.hash(password,10);
    const user = await User.create({username,password:hashedPassword});
    res.status(201).json(user);
    }
    catch(err){
        res.status(500).send(err.message);
    }
}

exports.getUsers = async (req,res)=>{
    const users = await User.find();
    res.status(200).json(users);
}

exports.login = async(req,res)=>{
    console.log(req.body);
    
    const {username,password} = req.body;
    console.log(username,password);
    
    const user = await User.findOne({username});
    console.log(user);
    
    if(!user){
        res.status(400).send('Email not found');
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){ 
        res.status(400).json({message:'Wrong password',isMatch:isMatch});
    } 
  
    const token = jwt.sign(
        {userId : user._id},
        process.env.secret_key,
        {expiresIn : '1h'}
    )
    res.status(200).json({token:token,isMatch:isMatch});

}