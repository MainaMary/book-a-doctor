import { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import Input from "../form/input";
import Label from "../form/label";
import Button from "../button";
const LoginForm = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    name: "",
    gender: "",
  });
  const { email, password } = formValues;
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
        <span className="text-primary">Welcome</span> back
      </p>
      <div>
        <Label>Email</Label>
        <Input type="text" value={email} onChange={handleChange} />
      </div>
      <div>
        <Label>Password</Label>
        <Input type="password" value={password} onChange={handleChange} />
      </div>

      <Button type="submit" className="m-auto w-full">
        Sign in
      </Button>
      <div>
        <p>
          Don't have an account ?{" "}
          <Link to="/auth/register" className="text-primary">
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );
};
export default LoginForm;
