const mongoose = require("mongoose");
Database = process.env.Mongo_Url

// connecting with mongoDB 
mongoose.connect(Database, { useNewUrlParser: true, useUnifiedTopology: true }).then ( () => console.log("MongoDB Connected"))
.catch ( (err) => console.log(err));
