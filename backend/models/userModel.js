const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type:String,
    },
    password: {
        type:String, 
    },
    email: {
        type:String,
    },
    no: {
        type:Number,  
    }
})

const myuser = mongoose.model("myuser", userSchema);

module.exports = myuser;