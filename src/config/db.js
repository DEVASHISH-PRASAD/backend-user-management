const mongoose = require("mongoose");
require("dotenv").config();

const connectToDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("Server is running on:", conn.connection.host);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectToDb;
