import jwt from "jsonwebtoken";
const generateToken = (user) => {
  const { _id, role } = user;
  const token = jwt.sign({ id: _id, role }, process.env.JWT_SECRET, {
    expiresIn: "24d",
  });
  return token;
};
export { generateToken };
