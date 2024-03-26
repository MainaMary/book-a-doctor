import express from "express";
import {
  createReview,
  getAllReviews,
} from "../controllers/reviewController.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router();
router.route.get("/", getAllReviews).post("/", verifyToken, createReview);
export default router;
