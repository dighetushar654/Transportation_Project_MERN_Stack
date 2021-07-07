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

const User = mongoose.model("User", userSchema);

module.exports = User;