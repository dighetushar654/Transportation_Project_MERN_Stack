const router = require("express").Router();
const User = require("../models/userModel");


router.post("/", async (req, res) => {

    const { name, password, email, no} = req.body;
    if ( !name || !password || !email || !no ) {
      return res.status(422).json({error:"filled all the fields"});
    }

    User.findOne({ email:email })
        .then((userExist) => {
          if(userExist) {
            return res.status(422).json({error:"Email already exist"});
          }
          
          const newuser = new User({ name, password, email, no});
          newuser.save().then(() => {
            res.status(200).json({message: "User registerd succesfully..."});
          }).catch((err) => res.status(500).json({err:"failed to registerd"}));
    
    }).catch(err => { console.log(err); })
  });

  router.get("/:id", async (req, res) => {
    try {
      const data = await User.findById(req.params.id);
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router; 