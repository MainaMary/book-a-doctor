import React, {
  createContext,
  useState,
  useCallback,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import Cookies from "js-cookie";
interface ResponseType {
  _id: string;
  email: string;
  name: string;
  phone: number;
  role: string;
  photo: string;
}
interface AuthContextType {
  userDetails: {
    data: ResponseType;
    token: string;
  };
  setUserDetails: React.Dispatch<
    React.SetStateAction<{
      data: {
        _id: string;
        email: string;
        name: string;
        phone: number;
        role: string;
        photo: string;
      };
      token: string;
    }>
  >;
}

interface IProps {
  children: ReactNode;
}
const defaultValues = {
  _id: "",
  email: "",
  name: "",
  phone: 0,
  role: "",
  photo: "",
};
export const AuthContext = createContext<AuthContextType | null>(null);
const AuthContextProvider = ({ children }: IProps) => {
  const [userDetails, setUserDetails] = useState({
    data: localStorage.getItem("userDetails")
      ? JSON.parse(localStorage.getItem("userDetails") || "")
      : defaultValues,
    token: "",
  });
  useEffect(() => {
    localStorage.setItem("userDetails", JSON.stringify(userDetails?.data));
    const expiryDate = new Date();
    expiryDate.setTime(expiryDate.getTime() + 24 * 60 * 60 * 1000);
    Cookies.set("access_token", userDetails.token, {
      expires: expiryDate,
    });
  }, [userDetails]);
  const value = { userDetails, setUserDetails };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthContextProvider;
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("context must be used within the context provider");
  }
  return context;
};
