const express = require("express");
const app = express();
var cors = require('cors')
app.use(cors())

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
require("./db/conn");
const userRoute = require("./routes/user");
const vehicleRoute = require("./routes/vehicle");
const homeimgRoute = require("./routes/homeimg");

const router = express.Router();

app.use(express.json());
app.use("/registerUser", userRoute);
app.use("/registerVehicle", vehicleRoute);
app.use("/homeimages", homeimgRoute);


app.listen(4000, () => {
    console.log(`Server Running On Port 4000`);
})