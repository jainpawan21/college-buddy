const express=require('express');
const route=express.Router();
const passport=require('passport');
route.get('/google',passport.authenticate('google',{scope:['profile','email']}));
route.get('/dashboard',passport.authenticate('google'),(req,res)=>{
    console.log("req contains user info is",req.user);
    res.send('welcome user'+req.user.username);
})
module.exports=route;