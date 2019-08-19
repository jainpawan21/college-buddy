const express=require('express');
const passport=require('passport');
const cookieSession=require('cookie-session');
const app=express();
const googleSetup=require('./utils/googlepassport');
app.use(cookieSession({
    maxAge:2*60*60*1000,
    keys:['RISHUTECHINDIAN']
}));
app.use(passport.initialize());  //this uses googleSetup
app.use(passport.session()); //this uses cookie session
app.use('/',require('./routes/user'));
app.listen(process.env.PORT||5555,()=>{
    console.log("server started....");
})