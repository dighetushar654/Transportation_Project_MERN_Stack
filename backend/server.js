const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
//User Routes
const userRoute = require("./routes/user");
const vehicleRoute = require("./routes/vehicle");
const homeimgRoute = require("./routes/homeimg");
const postRoutes = require("./routes/posts.js")

// App Config
const app = express();
dotenv.config();                // instanciating express() in app variable
var cors = require('cors')      // to use .env variables
app.use(cors())                 // allow any origin
const Port = process.env.Port;

// Database connection 
require("./db/conn");           // imported the DB connection

// Body parsers and set limit of data
app.use(bodyParser.json({ limit: '10mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

//Middalwares
app.use(express.json());
app.use("/registerUser", userRoute);
app.use("/registerVehicle", vehicleRoute);
app.use("/homeimages", homeimgRoute);
app.use('/posts', postRoutes);


//Default Route
app.get("/", (req, res) => {
    res.send("Hello From Server All Ok.........");
});


//Port for listening
app.listen(Port, () => {
    console.log(`Server Running On Port ${Port}`);
})