const express = require("express");
const bodyParser = require('body-parser');
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
// import postRoutes from './routes/posts.js';
const postRoutes = require("./routes/posts.js")

const router = express.Router();

app.use(bodyParser.json({ limit: '50mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(cors());

app.use(express.json());
app.use("/registerUser", userRoute);
app.use("/registerVehicle", vehicleRoute);
app.use("/homeimages", homeimgRoute);
app.use('/posts', postRoutes);



app.listen(4000, () => {
    console.log(`Server Running On Port 4000`);
})