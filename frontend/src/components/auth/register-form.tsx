import { useState, useRef, ChangeEvent, ChangeEventHandler } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { fileToDataString } from "../../utils";
import { Link } from "react-router-dom";
import Input from "../form/input";
import Label from "../form/label";
import Button from "../button";
import { uploadImageToCloudinary } from "../../utils";
const RegisterForm = () => {
  const [image, setImage] = useState<File>();
  const [previewUrl, setPreviewUrl] = useState("");
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    name: "",
    gender: "",
    role: "patient",
    photo: image,
  });
  const { email, password, name, gender } = formValues;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value, name } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleImageUpload: ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    const file = event.target.files as FileList;
    if (!file) return;
    const data = await uploadImageToCloudinary(file[0]);

    console.log(data.url);
    if (data) {
      setImage(data.url);
      setFormValues({ ...formValues, photo: data.url });
    }

    try {
      const preview = await fileToDataString(file?.[0]);
      setPreviewUrl(preview);
      setImage(data.url);
    } catch (error) {
      console.log(error);
    }
  };
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ formValues });
  };
  return (
    <form className="w-full space-y-2 rounded-md" onSubmit={handleSubmit}>
      <p className="text-xl font-semibold">
        Create an <span className="text-primary">account</span>
      </p>
      <div>
        <Label>Email</Label>
        <Input type="text" name="email" value={email} onChange={handleChange} />
      </div>
      <div>
        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label>Fullname</Label>
        <Input type="name" name="name" value={name} onChange={handleChange} />
      </div>
      <div className="flex h-auto items-center gap-3">
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="preview url"
            className="w-[50px] h-[50px] rounded-full shadow-md border"
          />
        ) : (
          <FaRegUserCircle />
        )}
        <Button onClick={handleButtonClick} className="py-1">
          {previewUrl ? "Edit image" : "Upload image"}
        </Button>
        <input
          className="hidden"
          type="file"
          onChange={handleImageUpload}
          ref={fileInputRef}
        />
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
            value={gender}
            onChange={handleChange}
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
