const mongoose=require('../db/connection');
var Schema=mongoose.Schema;
var timetableSchema=new Schema({
'branch':{type:String,required:true},
'sem':{type:String,required:true},
'time':{type:String,required:true},
'sec':{type:String,required:true},
'teacher':{type:String},
'subject':{type:String,required:true},
'room':{type:String}
});
var Time=mongoose.model('timetable',timetableSchema);
module.exports=Time;