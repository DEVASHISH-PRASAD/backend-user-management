const User = require("../model/userModel.js");

exports.home = (req, res) => {
  res.send(
    "Thank you for visiting our backend project, where we empower the functionality behind the scenes. Our backend system is the engine that drives seamless interactions, processes data, and ensures the smooth operation of our applications."
  );
};

exports.registration = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // Check if the user already exists with the given username or email
    const userExist = await User.findOne({ $or: [{ username }, { email }] });
    if (userExist) {
      return res.status(400).json({
        success: false,
        message: "User already exists!",
      });
    }

    // Create a new user
    const user = await User.create({
      username,
      password,
      email,
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully...",
      user,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      message: "Registration fails",
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Use findOne instead of find for a single document
    const user = await User.findOne({ username, password });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password!",
      });
    }

    res.status(200).json({
      success: true,
      message: "User Login Successfully",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      message: "Internal server error!",
    });
  }
};

exports.msg = (req, res) => {
  res.send("Welcome :)");
};
