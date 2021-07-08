const router = require("express").Router();
const User = require("../models/userSchema");

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