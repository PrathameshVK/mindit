const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
require('dotenv').config();

const registerUser=require('./routes/registerUser');
const login=require('./routes/login');

const PORT = process.env.PORT || 3000;

const app=express();

app.use(bodyParser.json());

const db=process.env.MONGODB_URL;

mongoose.connect(db,error=>{
    if(error){
        console.log(error);
    }else{
        console.log("connected to mongodb");
    }
})

app.use('/api/registerUser',registerUser);
app.use('/api/login',login);

app.get('/',function(req,res){
    res.send("Hello");
});

app.listen(PORT, function(){
    console.log("Server is running on ",PORT);
});