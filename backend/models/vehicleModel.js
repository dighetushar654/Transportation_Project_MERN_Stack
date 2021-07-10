const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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


//we are the hashing the password
vehicleSchema.pre('save', async function(next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});


module.exports = mongoose.model("myVehicle", vehicleSchema);