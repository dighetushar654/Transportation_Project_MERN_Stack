const router = require("express").Router();
const Vehicle = require("../models/vehicleModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// Async-Await
router.post("/", async (req, res) => {

  const { name, password, email, no, city, vehicleType} = req.body;
  if ( !name || !password || !email || !no || !city || !vehicleType ) {
    return res.status(422).json({error:"filled all the fields"});
  }

  try {
      const vehicleExist = await Vehicle.findOne({ email:email })

      if(vehicleExist) {
        return res.status(422).json({error:"Email already exist"});
      }
      
      const newVehicle = new Vehicle({ name, password, email, no, city, vehicleType});

      const vehicleRegister = await newVehicle.save();
  
      if(vehicleRegister) {
        res.status(200).json({message: "Vehicle registerd succesfully..."});
      } else {
        res.status(500).json({error: "Failed to register"})
      }

  } catch(err) {
    console.log(err);
  }
});


router.get("/:id", async (req, res) => {
    try {
      const data = await Vehicle.findById(req.params.id);
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.post("/signin", async (req,res) => {
  try {
      const {email, password} = req.body;

      if (!email || !password) {
        res.status(400).json({error:"Plz fill the data"});
      }

      const ownerLogin = await Vehicle.findOne({email: email});

      if (ownerLogin) {

        const isMatch = await bcrypt.compare(password, ownerLogin.password);
        
        const token = await ownerLogin.genrateAuthToken();
        console.log(token);

        if (!isMatch) {
            res.status(400).json({error:"Invalid Password"});
        } else {
            res.status(200).json({message:"vehicle owner Signin Successfully.."})
        }
      } else {
            res.status(400).json({error:"Invalid Creditials"});
      }
      
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router; 