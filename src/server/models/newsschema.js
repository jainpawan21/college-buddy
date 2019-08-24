const mongoose=require('../db/connection');
var Schema=mongoose.Schema;
var newsSchema=new Schema({
    'heading':{type:String,required:true},
    'news':{type:String,required:true},
    'image':{type:String}
});
var News=mongoose.model('news',newsSchema);
module.exports=News;