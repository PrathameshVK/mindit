const express=require('express');
const router=express.Router();
const User=require('../models/user');

router.get('/',async function(req,res,next){
    const userData=req.body;
    const user=new User(userData);
    user.save((error,success)=>{
        if(error){
            console.log(error);
        }else{
            res.status(200).send(success);
        }
    });
})



module.exports=router;