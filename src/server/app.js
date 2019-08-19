const express=require('express');
const passport=require('passport');
var bodyParser = require('body-parser');
const cookieSession=require('cookie-session');
const app=express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


const googleSetup=require('./utils/googlepassport');
app.use(cookieSession({
    maxAge:2*60*60*1000,
    keys:['RISHUTECHINDIAN']
}));
app.use(passport.initialize());  //this uses googleSetup
app.use(passport.session()); //this uses cookie session
app.use('/',require('./routes/user'));
app.use('/',require('./routes/paper'));
app.listen(process.env.PORT||5555,()=>{
    console.log("server started....");
})