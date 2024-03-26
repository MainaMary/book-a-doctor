import express from "express";
import {
  getDoctor,
  getAllDoctors,
  updateDoctor,
  deleteDoctor,
} from "../controllers/userController.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router();
router.get("/", verifyToken, getAllDoctors);
router.get("/:id", getDoctor);
router.put("/:id", updateDoctor);
router.delete("/:id", deleteDoctor);
export default router;
