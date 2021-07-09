const mongoose = require("mongoose");

const homeimgSchema = new mongoose.Schema({
    img:{
        type: String,
        required:true 
    }
},
{timestamps: true});

module.exports = mongoose.model("homeimages", homeimgSchema);