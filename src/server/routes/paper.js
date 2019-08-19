const paperOperation=require('../helpers/paperCrud');
const express=require('express');
const route=express.Router();

route.post('/uploadpaper',(req,res)=>{
    console.log("Data in body is ",req.body);
    paperOperation.uploadPaper(req.body,res);
});

module.exports=route;
