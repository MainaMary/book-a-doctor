import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Services from "../pages/services";
import Doctors from "../pages/doctors/Doctors";
import DoctorDetails from "../pages/doctors/DoctorDetails";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
const appRoutes = [
  {
    component: <Home />,
    path: "/",
  },
  {
    component: <Services />,
    path: "/services",
  },
  {
    component: <Doctors />,
    path: "/",
  },
  {
    component: <DoctorDetails />,
    path: "/doctor/:id",
  },
  {
    component: <Login />,
    path: "/auth/login",
  },
  {
    component: <Register />,
    path: "/auth/register",
  },
];

const AppRoutes = () => {
  return (
    <Routes>
      {appRoutes.map((label) => (
        <Route key={label.path} path={label.path} element={label.component} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
