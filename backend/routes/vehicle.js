const router = require("express").Router();
const Vehicle = require("../models/vehicleModel");

router.post("/", async (req, res) => {

  const { name, password, email, no, city, vehicleType} = req.body;
  if ( !name || !password || !email || !no || !city || !vehicleType ) {
    return res.status(422).json({error:"filled all the fields"});
  }

  Vehicle.findOne({ email:email })
      .then((vehicleExist) => {
        if(vehicleExist) {
          return res.status(422).json({error:"Email already exist"});
        }
        
        const newVehicle = new Vehicle({ name, password, email, no, city, vehicleType});
        newVehicle.save().then(() => {
          res.status(200).json({message: "Vehicle registerd succesfully..."});
        }).catch((err) => res.status(500).json({err:"failed to registerd"}));
  
  }).catch(err => { console.log(err); })
  });

  router.get("/:id", async (req, res) => {
    try {
      const data = await Vehicle.findById(req.params.id);
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router; 