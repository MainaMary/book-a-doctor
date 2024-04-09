import { api } from "../constants/config";
async function registerUser(formValues: {
  email: string;
  password: string;
  name: string;
  gender: string;
  role: string;
  photo: File | undefined;
}) {
  try {
    const response = await api.post("/auth/register", formValues);

    console.log({ response });
    return response.data;
  } catch (e) {
    throw e;
  }
}
export { registerUser };
