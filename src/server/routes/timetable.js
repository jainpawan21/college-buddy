const timetableOperation=require('../helpers/timetableCrud');
const express=require('express');
const route=express.Router();

route.post('/add',(req,res)=>{
    timetableOperation.add(req.body,res);
})

route.post('/search',(req,res)=>{
    timetableOperation.search(res);
})

module.exports=route;