import { useState } from "react";
import { useAuth } from "../../../context/useAuthContext";
import Appointments from "./Appointments";
import Profile from "./Profile";
const UserDashboard = () => {
  const [tabs, setTabs] = useState("appointments");
  const { userDetails } = useAuth();

  const list = [
    {
      name: "appointments",
      label: "Upcoming appointments",
    },
    {
      name: "settings",
      label: "Settings",
    },
  ];
  const handleTab = (name: string) => {
    setTabs(name);
  };
  return (
    <div className="container my-8 grid grid-cols-2">
      <div className="w-[70%]">
        <p>{userDetails?.data?.name}</p>
        <ul className="flex gap-6 border-b-2 w-full border-solid">
          {list.map((label) => (
            <li
              className="cursor-pointer"
              onClick={() => handleTab(label.name)}
            >
              {label.label}
            </li>
          ))}
        </ul>
        {tabs === "appointments" ? <Appointments /> : <Profile />}
      </div>
      <div className="w-[30%]">The profile</div>
    </div>
  );
};

export default UserDashboard;
