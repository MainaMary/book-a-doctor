import { z } from "zod";
export const registerSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
  name: z.string().min(1, { message: "Name is required" }),
  gender: z.string().min(1, { message: "Gender is required" }),
  role: z.string().min(1, { message: "Role is required" }),
  photo: z.string(),
});
