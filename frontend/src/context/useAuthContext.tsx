import React, {
  createContext,
  useState,
  useCallback,
  ReactNode,
  useContext,
} from "react";
interface ResponseType {
  _id: string;
  email: string;
  name: string;
  phone: number;
  role: string;
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
      };
      token: string;
    }>
  >;
}

interface IProps {
  children: ReactNode;
}
export const AuthContext = createContext<AuthContextType | null>(null);
const AuthContextProvider = ({ children }: IProps) => {
  const [userDetails, setUserDetails] = useState({
    data: { _id: "", email: "", name: "", phone: 0, role: "" },
    token: "",
  });
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
