const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({path: './config.env'});
require('./db/conn');
const userRoute = require("./routes/user");

const router = express.Router();

// const User = require("./models/userSchema");
Port = process.env.Port;

app.use("/registerUser", userRoute);

app.listen(Port, () => {
    console.log(`Server Running On Port ${Port}`);
})