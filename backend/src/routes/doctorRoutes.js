import express from "express";
import {
  getDoctor,
  getAllDoctors,
  updateDoctor,
  deleteDoctor,
  getDoctorProfile,
} from "../controllers/userController.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router();
router.get("/", verifyToken, getAllDoctors);
router.get("/:id", getDoctor);
router.put("/:id", updateDoctor);
router.delete("/:id", deleteDoctor);
router.get("/profile/doctor/:id", getDoctorProfile);
export default router;
