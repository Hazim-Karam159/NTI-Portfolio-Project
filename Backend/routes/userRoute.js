const express = require('express');
const router = express.Router();
const {getUsers,createUser,login} = require('../services/userService');
const authMiddleware = require('../config/auth');

router.get('/',authMiddleware,getUsers);
router.post('/',createUser);
router.post('/login',login);

module.exports = router;