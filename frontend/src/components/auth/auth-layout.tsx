import { ReactNode } from "react";
import Image from "../../assets/images/auth.svg";

interface Props {
  children: ReactNode;
}
const AuthLayout = ({ children }: Props) => {
  return (
    <div className="w-[70%] flex container  my-24 justify-center m-auto rounded-md  shadow-md border">
      <div className="w-1/2 bg-bg h-auto md:block hidden ">
        <img
          src={Image}
          alt="auth -image"
          className="w-auto h-auto object-cover"
        />
      </div>
      <div className="w-1/2 p-8">{children}</div>
    </div>
  );
};

export default AuthLayout;
