const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
require("./db/conn");
const userRoute = require("./routes/user");
const vehicleRoute = require("./routes/vehicle");

const router = express.Router();

// const User = require("./models/userSchema");
Port = process.env.Port;
<<<<<<< HEAD
=======

>>>>>>> e04613339718ce1860c4059c210cc1fe4317b1b4
app.use(express.json());
app.use("/registerUser", userRoute);
app.use("/registerVehicle", vehicleRoute);


app.listen(4000, () => {
    console.log(`Server Running On Port 4000`);
})