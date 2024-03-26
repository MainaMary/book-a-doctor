import UserModel from "../models/UserModel.js";
import DoctorModel from "../models/DoctorModel.js";
const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserModel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      message: "User details successfully updated!",
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }
    res.status(200).json({
      message: "User successfully deleted!",
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserModel.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }
    res.status(200).json({
      message: "User successfully deleted!",
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};
const getAllUsers = async () => {
  try {
    const users = await UserModel.find({});
    res.status(200).json({
      message: "Users found",
      data: users,
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};
const updateDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const doctor = await DoctorModel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      message: "User details successfully updated!",
      success: true,
      data: doctor,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

const getDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const doctor = await DoctorModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }
    res.status(200).json({
      message: "User successfully deleted!",
      success: true,
      data: doctor,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

const deleteDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const doctor = await DoctorModel.findByIdAndDelete(id);
    if (!doctor) {
      return res.status(404).json({ message: "User not found!" });
    }
    res.status(200).json({
      message: "User successfully deleted!",
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};
const getAllDoctors = async () => {
  try {
    const doctors = await DoctorModel.find({});
    res.status(200).json({
      message: "Users found",
      data: doctors,
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};
export {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
  deleteDoctor,
  getDoctor,
  updateDoctor,
  getAllDoctors,
};
