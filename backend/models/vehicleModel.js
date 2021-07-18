const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


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
    },
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
    tokens:[
        {
            token:{
                type:String
            }
        }
    ]
},
{timestamps: true});


//we are the hashing the password
vehicleSchema.pre('save', async function(next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

//we are genrating token
vehicleSchema.methods.genrateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id:this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token:token });
        await this.save();
        return(token);
    } catch (err) {
        console.log(err);
    }
}


module.exports = mongoose.model("myVehicle", vehicleSchema);