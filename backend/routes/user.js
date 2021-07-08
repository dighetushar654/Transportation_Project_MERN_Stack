const router = require("express").Router();
const user = require("../models/userModel");

router.post("/", async (req, res) => {
    const newUser = new user(req.body);
    try {
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