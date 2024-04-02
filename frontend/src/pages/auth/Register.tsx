import { useState, ChangeEvent } from "react";
import Input from "../../components/form/input";
import Label from "../../components/form/label";
const Register = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    name: "",
    gender: "",
  });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div className="container flex m-auto w-[70%]">
      <form className="w-full space-y-2 rounded-md" onSubmit={handleSubmit}>
        <div></div>
        <div></div>
        <div></div>
        <div className="grid col-span-2 gap-3">
          <div>
            <Label>User</Label>
            <select
              id="small"
              className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose</option>
              <option value="US">Patient</option>
              <option value="CA">Doctor</option>
            </select>
          </div>
          <div>
            <Label>Gender</Label>
            <select
              id="small"
              className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Gender</option>
              <option value="US">Male</option>
              <option value="CA">Female</option>
              <option value="CA">Other</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
