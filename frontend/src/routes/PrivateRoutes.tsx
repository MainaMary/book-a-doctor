import { getAccessToken } from "../utils/user";
import { Outlet, Navigate } from "react-router-dom";
const PrivateRoutes = () => {
  const token = getAccessToken();
  console.log({ token });
  return <div>{token ? <Outlet /> : <Navigate to={"/auth/login"} />}</div>;
};

export default PrivateRoutes;
