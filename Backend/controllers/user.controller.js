import { User } from "../models/user.model.js";
import argon2 from "argon2";

const signUpUser = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    console.log(email, name, password);

    const chechUser = await User.findOne({ email });

    if (chechUser) {
      console.log("user already exist with this email");
      return res.status(400).json({ message: "user had signed up already" });
    }

    const hashPassword = await argon2.hash(password);

    const user = new User({
      name,
      email,
      password: hashPassword,
    });

    await user.save();

    res.status(201).json({
      message: "Signup successful",
    });
  } catch (error) {
    console.log(error.message);
    res.status(401).json({ message: "Invalid credentials" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      console.log("user is not present in database with this email");
      return res.status(400).json({ message: "Incorrect email or password" });
    }

    const isValidUser = await argon2.verify(user.password, password);

    if (!isValidUser) {
      console.log("Incorrect password");
      return res.status(400).json({ message: "Incorrect email or password" });
    }

    console.log("login successful");
    res.status(200).json({ message: "login successful" });
  } catch (error) {
    console.log(error.message);
    res.status(401).json(error.message);
  }
};

export { signUpUser, loginUser };