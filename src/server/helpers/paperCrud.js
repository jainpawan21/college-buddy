const Paper=require('../models/paperschema');

const paperOperation={
  uploadPaper(paperObject,res) {
    Paper.create(paperObject,(err,doc)=>{
        if(err){
            console.log("error occured during upload ",err);
            res.json({status:'F',error:err});
        }
        else{
            console.log("Paper details uploaded sucessfully ",doc);
            res.json({doc:doc});
        }
    })
  },
  displayPaper(res){
      Paper.find({},(err,docs)=>{
          if(err){
              console.log("Error , can't display paper ",err);
              res.json({status:'F',error:err});
          }
          else{
              res.json({papers:docs});
          }
      })
  }
}
module.exports=paperOperation;