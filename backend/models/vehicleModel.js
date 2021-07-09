const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    password: {
        type:String, 
    },
    email: {
        type:String,
    },
    no: {
        type:Number,  
    },
    city: {
        type: String
    },
    vehicleType: {
        type: String
    }
},
{timestamps: true});

module.exports = mongoose.model("myVehicle", vehicleSchema);