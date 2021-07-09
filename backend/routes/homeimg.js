const express = require('express');
const router = express.Router();
const multer = require("multer");
const HomeImages = require("../models/homeimgModel");
// defining storage params for multer
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './uploads/stories/');
    },
    filename: (req, file, cb)=>{
        cb(null, file.originalname);
    }
});





module.exports = router;