import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookeiParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import authRoute from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
const corsOptions = {
  origin: true,
};

//middleware
app.use(express.json());
app.use(cookeiParser());
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/auth", authRoute);
app.use("/api/v1/review", reviewRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/doctor", doctorRoutes);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//connect to DB
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Database connection established");
  } catch (error) {
    console.log(error.message);
  }
};

app.listen(port, () => {
  connectToDatabase();
  console.log(`Server is running on port ${port}`);
});
