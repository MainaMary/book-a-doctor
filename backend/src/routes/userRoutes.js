import express from "express";
import {
  getAllUsers,
  deleteUser,
  updateUser,
  getUser,
} from "../controllers/userController";
const router = express.Router();
router.get("/", getAllUsers);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
export default userRoutes;
