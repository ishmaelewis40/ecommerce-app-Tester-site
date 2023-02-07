const express = require("express");
const dbConnect = require("./config/dbconnect");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3000
const  DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost3000:27017";
const authRouter = require("./routes/authRoute");
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);


dbConnect();
app.use('/', (req, res) => {
    res.send("Hello from the server sideee")
});

app.use("/api/user", authRouter);
app.listen(PORT, () => {
    console.log(`server is listening at Port ${PORT}`)
});
