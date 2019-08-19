const mongoose=require('../db/connection');
var Schema=mongoose.Schema;
var paperSchema=new Schema({
    'title':{type:String},
    'url':{type:String},
    'sem':{type:Number},
    'branch':{type:String}
});
var Paper=mongoose.model('paper',paperSchema);
module.exports=Paper;