const express=require('express');
const router=express.Router();
const User=require('../models/user');

router.post('/',async function(req,res){
    const userData=req.body;
    User.findOne({email: userData.email}, (error,user)=>{
        if(error){
            console.log(error);
        }else{
            if(!user){
                res.status(401).send('Invalid email');
            }else if(user.password!=userData.password){
                res.status(401).send('Invalid password');
            }else{
                res.status(200).send(user);
            }
        }
    });
});

module.exports=router;