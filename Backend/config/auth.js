const jwt = require('jsonwebtoken');
require('dotenv').config();
const authMiddleware = (req,res,next)=>{
    const token = req.header('Authorization')?.replace('Bearer ','');
    console.log(token);
    if(!token){
        res.status(401).json({error: 'Access denied, token missing'});
    }
   try{
   
    const verified = jwt.verify(token,process.env.secret_key);
    req.user = verified;
    next();
   }
   catch(err)
   {
    res.status(400).send(err.message);
   }
}
module.exports = authMiddleware;