import { AxiosError } from "axios";

export const makeErrorMessage = (error: AxiosError) => {
  try {
    if (error?.response?.status === 404) {
      return error?.response?.data.message || "Resource not found";
    }

    if (error.response?.status === 401) {
      return "Unauthorized request";
    }

    if (error?.response?.data?.message) {
      return error?.response?.data?.message;
    }

    if (error?.response?.data?.errors) {
      return JSON.stringify(Object.values(error.response?.data?.errors)[0])
        .replaceAll('"', "")
        .replaceAll("[", "")
        .replaceAll("]", "");
    }

    return `${error?.message}` || "Something went wrong";
  } catch (err: any) {
    return err;
  }
};
