import { BASE_URL } from "../constants/config";
import axios from "axios";
const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET;
const cloudName = import.meta.env.VITE_CLOUDINARY_NAME;

export const getCurrentYear = () => {
  return new Date().getFullYear();
};
export const fileToDataString = (file: File) => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onerror = (error) => reject(error);
    reader.onload = () => resolve(reader.result as string);
  });
};
export const uploadImageToCloudinary = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);
  formData.append("cloud_name", cloudName);

  try {
    const response = await axios.post(BASE_URL, formData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
