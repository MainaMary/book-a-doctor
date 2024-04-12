import { getAccessToken } from "../utils/user";
import { Outlet, Navigate } from "react-router-dom";

const PublicRoutes = () => {
  const token = getAccessToken();
  return <div>{!token ? <Outlet /> : <Navigate to={"/"} />}</div>;
};

export default PublicRoutes;
