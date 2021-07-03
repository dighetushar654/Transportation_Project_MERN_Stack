const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({path: './config.env'});
require('./db/conn');
// const User = require("./models/userSchema");
Port = process.env.Port;

const app = express();

// link the router
app.use(require('./router/auth'))
app.use(express.json());

// middleware
const middleware = (req, res, next) => {
    console.log("middleware");
    next();
}
app.get("/",(req, res) => {
    res.send('Hello World!');
})

app.get("/home",middleware ,(req, res) => {
    res.send('Home Page');
})

app.listen(Port, () => {
    console.log(`Server Running On Port ${Port}`);
})