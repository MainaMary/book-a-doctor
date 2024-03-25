import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import UserModel from "../models/UserModel.js";
import DoctorModel from "../models/DoctorModel.js";
const register = async (req, res) => {
  const { email, password, name, role, phone, gender } = req.body;
  try {
    let user = null;
    if (role === "patient") {
      user = await UserModel.findOne({ email });
    } else if (role === "doctor") {
      user = await DoctorModel.findOne({ email });
    }
    if (user) {
      return res.status(400).json({ message: "User already exist" });
    }
    //hash password
    const salt = bcrypt.genSalt(process.env.salt);
    const hashpassword = bcrypt.hash(password, salt);
    if (role === "patient") {
      user = new User({
        ...req.body,
        password: hashpassword,
      });
    }

    if (role === "doctor") {
      user = new Doctor({
        ...req.body,
        password: hashpassword,
      });
    }
    await user.save();
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
const login = async () => {};
export { register, login };
