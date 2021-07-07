import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import User from "../Models/User.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      res.send({ message: "All fields are required" });
    }
    const oldUser = User.findOne({ email });
    if (oldUser) return res.send({ message: "user already exists" });

    const hashPassword = await bcrypt.hash(password, 12);
    // can do await User.create({}) too
    const newUser = await new User.save({
      name,
      email,
      password: hashPassword,
    });

    const token = jwt.sign({ id: newUser._id }, "SECRET", { expiresIn: "1h" });
    res.send({ token, newUser });
  } catch (error) {
    res.send({ message: "Something went wrong" });

    console.log(error);
  }
};

export const login = (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.send({ message: "All fields are required" });
    }
    const existingUser = User.findOne({ email });
    if (!existingUser)
      return res.send({ message: "User does not exist, Please Signup first" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) return res.send({ message: "Wrong credentials" });
    const token = jwt.sign({ id: existingUser._id }, "SECRET", {
      expiresIn: "1h",
    });
    res.send({ existingUser, token });
  } catch (error) {
    res.send({ message: "Something went wrong" });

    console.log(error);
  }
};
const get_user = (req, res)=>{
  const user = User.findById(req.user.id)
}
