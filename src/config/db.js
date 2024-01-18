const mongoose = require("mongoose");
require("dotenv").config();
Mongo_uri=process.env.MONGO_URI||"mongodb://localhost:27017/my_database";
const connectToDb = async () => {
  try {
    const conn = await mongoose.connect(Mongo_uri);
    console.log("Server is running on:", conn.connection.host);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectToDb;
