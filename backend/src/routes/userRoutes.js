import express from "express";
import {
  getAllUsers,
  deleteUser,
  updateUser,
  getUser,
  getUserProfile,
  getUserAppointments,
} from "../controllers/userController.js";
const router = express.Router();
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);
router.route("/").get(getAllUsers);
router.route("/").get(getUserProfile);
// router.get("/profile/user/:id", getUserProfile);
router.get("appointments/my-appointments/:id", getUserAppointments);

export default router;
