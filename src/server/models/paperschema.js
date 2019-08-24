const mongoose=require('../db/connection');
var Schema=mongoose.Schema;
var paperSchema=new Schema({
    'subject' : { 
        type : String,required:true
    },
    'url' : { 
        type : String,required:true
    },
    'sem' : { 
        type : Number,required:true
    },
    'branch' : { type : String,required:true
    },
});
var Paper=mongoose.model('paper',paperSchema);
module.exports=Paper;