const Time=require('../models/timetableschema');

const timeOperations={
    add(object,res){
        Time.create(object,(err,doc)=>{
            if(err){
                console.log("Error during uploading time table ",err);
                res.json({"status":"F","doc":doc});
            }
        })
    },
    search(object,res){
        Time.find({'branch':object.branch,'sem':object.sem,'time':object.time,'sec':object.sem},{subject:1,teacher:1,room:1},(err,doc)=>{
            if(err){
                console.log("Error in searching timetable ",err);
            }
            else{
                res.json({"document is":doc});
            }
        })
    },

}
module.exports=timeOperations;