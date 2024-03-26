import { generateToken } from "../utils/index.js";
import bcrypt from "bcryptjs";
import UserModel from "../models/UserModel.js";
import DoctorModel from "../models/DoctorModel.js";
const register = async (req, res) => {
  const { email, password, name, role, phone, gender } = req.body;
  try {
    let user = null;
    if (role === "doctor") {
      user = await DoctorModel.findOne({ email });
    } else if (role === "patient") {
      user = await UserModel.findOne({ email });
    }
    if (user) {
      return res.status(400).json({ message: "User already exist" });
    }
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);

    if (role === "patient") {
      user = new UserModel({
        ...req.body,
        password: hashpassword,
      });
    }

    if (role === "doctor") {
      user = new DoctorModel({
        ...req.body,
        password: hashpassword,
      });
    }
    await user.save();
    delete user._doc.password;
    return res
      .status(201)
      .json({ success: true, message: "User succesfully created", data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const login = async (req, res) => {
  let user = null;
  const { email, password } = req.body;
  try {
    const doctor = await UserModel.findOne({ email });
    const patient = await DoctorModel.findOne({ email });
    if (doctor) {
      user = doctor;
    } else if (patient) {
      user = patient;
    }
    if (!user) {
      res.status(404).json({ message: "User does not exist!" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(400).json({ message: "Invalid user details" });
    }
    const token = generateToken(user);

    //ensure the password is not part of the data response
    delete user._doc.password;
    res.status(200).json({
      success: true,
      data: user,
      token,
      message: "Successfully logged in",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export { register, login };
