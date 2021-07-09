const express = require('express');
const router = express.Router();
const multer = require("multer");
const HomeImages = require("../models/homeimgModel");
const path = require("path");

// defining storage params for multer
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, path.join(__dirname,'../uploads/images'));
    },
    filename: (req, file, cb)=>{
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: storage,
    limits : {fileSize : 10000000}
});


router.post("/", upload.single('Image'),async(req, res) => {
    try {
        console.log(req.file);
        const fileLoca = req.file.path;

        const newImg = new HomeImages({
          img: await req.file.path
        });
        const savedimg = await newImg.save();
        res.status(200).json(savedimg);
    } catch(err) {res.status(500).json(err);}

});





module.exports = router;