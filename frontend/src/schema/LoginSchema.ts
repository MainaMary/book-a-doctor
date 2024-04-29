import { z } from "zod";
export const loginSchema = z.object({
  password: z.string().min(1, { message: "First name is required" }),
  email: z.string().min(1, { message: "Last name is required" }),
});
