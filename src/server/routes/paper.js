const paperOperation=require('../helpers/paperCrud');
const express=require('express');
const route=express.Router();
// const multer=require('multer');
// const drive=require('../drive/sample');

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       console.log('previous year pdf uploading...');
//       cb(null, './drive')   // upload file Location
//     },
//     filename: function (req, file, cb) {
//       console.log('File name is ',file.fieldname);
//       cb(null, file.fieldname + '-' + Date.now()+".pdf")
//     }
//   })

//   const fileFilter = (req, file, cb) => {
//     // reject a file
//     if (file.mimetype === 'application/pdf') {
//       cb(null, true);
//     } else {
//       cb(null, false);
//     }
//   };
  
//   const upload = multer({
//     storage: storage,
//     limits: {
//       fileSize: 1024 * 1024 * 10 //max 5mb
//     },
//     fileFilter: fileFilter
//   });


//   route.post('/uploadpaper',upload.single('file'),(req,res)=>{
//     req.body.img=req.file.path;
//     paperOperation.uploadPaper(req.body,res);
// })


route.post('/uploadpaper',(req,res)=>{
    console.log('in upload route');
    paperOperation.uploadPaper(req.body,res);
    // const response = await drive.upload();
    // console.log(response);
    // console.log("After await in route ");
    // res.json({"fileid": "uploaded"});
   // console.log("Data in body is ",req.body);
    //paperOperation.uploadPaper(req.body,res);
});

// route.get('/uploaded',(req,res)=>{
//     res.send("Paper uploaded");
// })

module.exports=route;
