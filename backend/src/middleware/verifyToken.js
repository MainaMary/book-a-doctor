import jwt from "jsonwebtoken";
import UserModel from "../models/UserModel.js";
import DoctorModel from "../models/DoctorModel.js";

const verifyToken = (req, res, next) => {
  const authToken = req.headers.authorization;
  if (!authToken || !authToken.startsWith("Bearer ")) {
    res.status(401).json({ success: false, message: "Authorization failed." });
  }
  try {
    //verify if token is valid
    const token = authToken.split(" ")[1];
    const checkToken = jwt.verify(token, process.env.JWT_SECRET);
    req.id = checkToken.id;
    req.role = checkToken.role;
    console.log(req.id, req.role);
    next();
  } catch (error) {
    console.log(error.message);
    if (error.name === "TokenExpiredError") {
      res.status(401).json({ message: "Token has expired" });
    }
    res.status(401).json({ message: "Invalid token", success: false });
  }
};

export { verifyToken };
