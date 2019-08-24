const News=require('../models/newsschema');

const newsOperation={
    post(object,res){
        News.create(object,(err,doc)=>{
            if(err){
                console.log("Some errro occured during news posting ",err);
                res.json({"status":"F","error":err});
            }
            else{
                res.json({"news":doc});
            }
        })
    }
}