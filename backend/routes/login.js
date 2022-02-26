const express=require('express');
const router=express.Router();
const bcrypt=require('bcryptjs');
const User=require('../models/user');

router.post('/',async function(req,res){
    const userData=req.body;
    const fetchUserData= await User.findOne({email: userData.email});
    if(!fetchUserData){
        res.status(401).json({"success": false, "message": "Invalid Email"});
    }else{
        const checkPassword=await bcrypt.compare(userData.password, fetchUserData.password);
        if(checkPassword){
            res.status(200).json({"success": true, "message": "login successful"});
        }else{
            res.status(401).json({"success": false, "message": "Invalid Password"});
        }
    }
});

module.exports=router;