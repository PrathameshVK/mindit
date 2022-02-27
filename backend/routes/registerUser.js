const express=require('express');
const router=express.Router();
const User=require('../models/user');

router.get('/',async function(req,res,next){
    const userData=req.body;
    const user=new User(userData);
    user.save((error,success)=>{
        if(error){
            if(error.keyValue && error.keyValue.email){
                return res.status(422).send({ succes: false, message: 'Usern with that email already exists !' });
            }else if(error.keyValue && error.keyValue.username){
                return res.status(422).send({ succes: false, message: 'Usern with that username already exists !' });
            }
        }else{
            res.status(200).send(success);
        }
    });
})



module.exports=router;