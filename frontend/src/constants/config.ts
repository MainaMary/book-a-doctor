import axios, { AxiosInstance } from "axios";
const BASE_URL = `https://api.cloudinary.com/v1_1/${
  import.meta.env.VITE_CLOUDINARY_NAME
}/image/upload`;
const ADMIN_MODULE_URL = "https://localhost:5000";
const api: AxiosInstance = axios.create({
  baseURL: ADMIN_MODULE_URL || "",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
export { BASE_URL, ADMIN_MODULE_URL, api };
