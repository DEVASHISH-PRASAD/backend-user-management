const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors"); // cross origin request

const connectToDb = require("./config/db.js");

//Express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
//init database connection
connectToDb();

const userRoutes = require("./routes/userRoutes.js");

app.use("/", userRoutes);

module.exports = app;
