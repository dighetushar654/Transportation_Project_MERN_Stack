const router = require("express").Router();
<<<<<<< HEAD
const user = require("../models/userModel");
=======
const User = require("../models/userSchema");
>>>>>>> e04613339718ce1860c4059c210cc1fe4317b1b4

router.post("/", async (req, res) => {
    try {
      const newUser = new User(req.body);
      const saveduser = await newUser.save();
      res.status(200).json(saveduser);
    } catch (err) {
      res.status(500).json(err);
      console.log(err)
    }
  });

  router.get("/:id", async (req, res) => {
    try {
      const data = await user.findById(req.params.id);
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router; 