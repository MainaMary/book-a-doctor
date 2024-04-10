import axios, { AxiosInstance } from "axios";
import { getAccessToken } from "../utils/user";
const BASE_URL = `https://api.cloudinary.com/v1_1/${
  import.meta.env.VITE_CLOUDINARY_NAME
}/image/upload`;
const ADMIN_MODULE_URL = "http://localhost:8000";

const headers: HeadersInit = {
  "Content-Type": "application/json",
  Accept: "application/json",
};
const token = getAccessToken();
if (token) {
  headers["Authorization"] = `Bearer ${token}`;
}

const api: AxiosInstance = axios.create({
  baseURL: ADMIN_MODULE_URL,
  headers,
});
export { BASE_URL, ADMIN_MODULE_URL, api };
