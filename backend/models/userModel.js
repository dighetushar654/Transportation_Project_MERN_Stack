const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
userSchema.pre('save', async function(next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

//we are genrating token
userSchema.methods.genrateAuthToken = async function () {
    
    try {
        let token = jwt.sign({ _id:this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token:token });
        await this.save();
        return(token);
    } catch (err) {
        console.log(err);
    }
}

const myuser = mongoose.model("myuser", userSchema);

module.exports = myuser;
