const router = require("express").Router();
const mongoose = require("mongoose");
const Vehicle = require("../models/vehicleModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// Async-Await
router.post("/", async (req, res) => {

  const { name, password, email, no, city, vehicleType, rout, cost, status} = req.body;
  if ( !name || !password || !email || !no || !city || !vehicleType) {
    return res.status(422).json({error:"filled all the fields"});
  }

  try {
      const vehicleExist = await Vehicle.findOne({ email:email })

      if(vehicleExist) {
        return res.status(422).json({error:"Email already exist"});
      }
      
      const newVehicle = new Vehicle({ name, password, email, no, city, vehicleType, rout, cost, status});

      const vehicleRegister = await newVehicle.save();
      const token = await newVehicle.genrateAuthToken();
  
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

router.patch("/updateVehicle", async (req, res) => {
  const { name, email, no, city, vehicleType, rout, cost, status} = req.body;
  try {
    const vehicleExist = await Vehicle.findOne({ email:email })
    // console.log(userExist);

    if(vehicleExist) {
      const key = vehicleExist._id;
      // console.log(key);
       const updatevehicle = new Vehicle({ name, email, no, city, vehicleType, rout, cost, status});
      Vehicle.findByIdAndUpdate(key, {name: req.body.name,
      email: req.body.email, no: req.body.no, city: req.body.city, vehicleType: req.body.vehicleType, rout: req.body.rout, cost: req.body.cost, status: req.body.status}).then(() => 
      {res.status(200).json({message: "Vehicle Update succesfully..."});
      })
    }
  }
  catch(err) {
  }
})

router.get("/", async (req, res) => {
  try {
    const data = await Vehicle.find();
    res.status(200).json(data);
} catch (err) {
    res.status(500).json(err);
}
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  await Vehicle.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
});


module.exports = router; 