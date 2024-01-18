const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
});

// Use PascalCase for the model name
module.exports = mongoose.model("User", userSchema);
