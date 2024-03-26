import express from "express";
import {
  getAllUsers,
  deleteUser,
  updateUser,
  getUser,
} from "../controllers/userController.js";
const router = express.Router();
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);
router.route("/").get(getAllUsers);

export default router;
