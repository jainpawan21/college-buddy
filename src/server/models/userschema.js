const mongoose=require('../db/connection');
var Schema=mongoose.Schema;
var userSchema=new Schema({
    'username':{type:String,required:true},
    'googleId':{type:String,required:true},
    'pic':{type:String,required:true},
    'email':{type:String,required:true}
});
var User=mongoose.model('users',userSchema);
module.exports=User;