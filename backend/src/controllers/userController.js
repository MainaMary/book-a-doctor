import UserModel from "../models/UserModel.js";
import DoctorModel from "../models/DoctorModel.js";
import AppointmentModel from "../models/AppointmentModel.js";
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

const getUserProfile = async (req, res) => {
  const userId = req.id;
  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      res.status().json({
        success: false,
        message: "User not found",
      });
    }
    const { password, ...rest } = user._doc;
    res.status(200).json({
      message: "User profile data",
      success: true,
      data: { ...rest },
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

const getUserAppointments = async () => {
  try {
    const id = req.id;

    //retrieve appointments from AppointmentModel for a specific user
    const bookings = await AppointmentModel.find({ user: id });
    //Extract doctor ids form appointment bookings
    const doctorIds = bookings.map((booking) => booking.doctor.id);

    //retrieve doctors info using the generated doctorIds
    const doctors = await DoctorModel.find({
      _id: { $in: doctorIds },
    }).select("-password");
    res.status(200).json({
      message: "Appointments  found",
      data: doctors,
      success: true,
    });
  } catch (error) {}
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
  const doctorId = req.id;
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
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
  getUserProfile,
  getUserAppointments,
  deleteDoctor,
  getDoctor,
  updateDoctor,
  getAllDoctors,
  getDoctorProfile,
};
