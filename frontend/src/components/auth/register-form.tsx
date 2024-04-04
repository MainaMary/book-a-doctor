import { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import Input from "../form/input";
import Label from "../form/label";
import Button from "../button";
const RegisterForm = () => {
  const [image, setImage] = useState<File>();
  const [previewUrl, setPreviewUrl] = useState(null);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    name: "",
    gender: "",
    role: "patient",
    photo: image,
  });
  const { email, password, name, gender } = formValues;
  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files?.length) {
      setImage(files?.[0]);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <form className="w-full space-y-2 rounded-md" onSubmit={handleSubmit}>
      <p className="text-xl font-semibold">
        Create an <span className="text-primary">account</span>
      </p>
      <div>
        <Label>Email</Label>
        <Input type="text" value={email} onChange={handleChange} />
      </div>
      <div>
        <Label>Password</Label>
        <Input type="password" value={password} onChange={handleChange} />
      </div>
      <div>
        <Label>Fullname</Label>
        <Input type="name" value={name} onChange={handleChange} />
      </div>
      <div className="flex justify-between gap-3">
        <div className="w-1/2">
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
        <div className="w-1/2">
          <Label>Gender</Label>
          <select
            id="small"
            className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Gender</option>
            <option value={gender}>Male</option>
            <option value={gender}>Female</option>
            <option value={gender}>Other</option>
          </select>
        </div>
      </div>
      <Button type="submit" className="m-auto w-full">
        Create an account
      </Button>
      <div>
        <p>
          Already have an account ?{" "}
          <Link to="/auth/login" className="text-primary">
            Login
          </Link>
        </p>
      </div>
    </form>
  );
};
export default RegisterForm;
