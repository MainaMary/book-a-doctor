import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String },
  photo: { type: String },
  gender: { type: String, enum: ["male", "female", "other"] },
  bloodType: { type: String },
  appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
  role: {
    type: String,
    enum: ["patient", "admin"],
    default: "patient",
  },
});

export default mongoose.model("User", UserModel);
