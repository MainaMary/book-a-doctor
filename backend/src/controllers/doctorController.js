import DoctorModel from "../models/DoctorModel.js";
import UserModel from "../models/UserModel.js";
import AppointmentModel from "../models/AppointmentModel.js";
const updateDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const doctor = await DoctorModel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      message: "Doctor details successfully updated!",
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
    if (!doctor) {
      return res.status(404).json({ message: "User not found!" });
    }
    res.status(200).json({
      message: "Doctor found!",
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
const getAllDoctors = async (req, res) => {
  const { query } = req.query;
  try {
    const doctors = await DoctorModel.find({});
    res.status(200).json({
      message: "Doctors found",
      data: doctors,
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};
const getDoctorProfile = async (req, res) => {
  const doctorId = req.params.id;
  try {
    const doctor = await UserModel.findById(doctorId);
    if (!doctor) {
      res.status().json({
        success: false,
        message: "Doctor not found",
      });
    }
    const { password, ...rest } = user._doc;
    const appointments = await AppointmentModel.find({ doctor: doctorId });
    res.status(200).json({
      message: "User profile data",
      success: true,
      data: { ...rest, appointments },
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};
export {
  deleteDoctor,
  getDoctor,
  updateDoctor,
  getAllDoctors,
  getDoctorProfile,
};
