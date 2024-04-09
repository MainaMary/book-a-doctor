import { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import Input from "../form/input";
import Label from "../form/label";
import Button from "../button";
import { api } from "../../constants/config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuthContext";

const LoginForm = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    name: "",
    gender: "",
  });
  const { email, password } = formValues;
  const navigate = useNavigate();
  const { setUserDetails } = useAuth();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await api.post("/auth/login", formValues);
      if (response.data) {
        toast.success(response.data.message);
        const { _id, email, name, phone, role } = response?.data?.data;
        setUserDetails({
          data: {
            _id,
            email,
            name,
            phone,
            role,
          },
          token: response.data.token,
        });
        navigate("/doctors");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="w-full space-y-2 rounded-md" onSubmit={handleSubmit}>
      <p className="text-xl font-semibold">
        <span className="text-primary">Welcome</span> back
      </p>
      <div>
        <Label>Email</Label>
        <Input type="text" value={email} name="email" onChange={handleChange} />
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
