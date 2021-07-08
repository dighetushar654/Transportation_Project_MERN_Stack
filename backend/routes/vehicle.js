const router = require("express").Router();
const vehicle = require("../models/vehicleModel");

router.post("/", async (req, res) => {
    const newVehicle = new vehicle(req.body);
    try {
      const savedvehicle = await newVehicle.save();
      res.status(200).json(savedvehicle);
    } catch (err) {
      res.status(500).json(err);
      console.log(err)
    }
  });

  router.get("/:id", async (req, res) => {
    try {
      const data = await vehicle.findById(req.params.id);
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router; 