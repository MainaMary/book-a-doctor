import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Services from "../pages/services";
import Doctors from "../pages/doctors/Doctors";
import DoctorDetails from "../pages/doctors/DoctorDetails";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import DoctorDashboard from "../pages/dahsboard/DoctorDashboard";
import UserDashboard from "../pages/dahsboard/UserDashboard";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
const appRoutes = [
  {
    component: <Home />,
    path: "/",
    isProtected: false,
  },
  {
    component: <Services />,
    path: "/services",
    isProtected: false,
  },
  {
    component: <Doctors />,
    path: "/doctors",
    isProtected: false,
  },
  {
    component: <DoctorDetails />,
    path: "/doctor/:id",
    isProtected: true,
  },
  {
    component: <Login />,
    path: "/auth/login",
    isProtected: false,
  },
  {
    component: <Register />,
    path: "/auth/register",
    isProtected: false,
  },
  {
    component: <DoctorDashboard />,
    path: "/dashboard/doctor",
    isProtected: true,
  },
  {
    component: <UserDashboard />,
    path: "/dashboard/user",
    isProtected: true,
  },
];

const AppRoutes = () => {
  return (
    <Routes>
      {appRoutes.map((label) => {
        return label.isProtected ? (
          <Route element={<PrivateRoutes />}>
            <Route
              key={label.path}
              path={label.path}
              element={label.component}
            />
          </Route>
        ) : (
          <Route element={<PublicRoutes />}>
            <Route
              key={label.path}
              path={label.path}
              element={label.component}
            />
          </Route>
        );
      })}
    </Routes>
  );
};

export default AppRoutes;
