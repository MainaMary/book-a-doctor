import { useState } from "react";
import { useAuth } from "../../../context/useAuthContext";
import Appointments from "./Appointments";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import { cn } from "../../../utils/classnames";
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
    <div className="container my-8 flex ">
      <div className="w-[70%]">
        <p className="font-bold text-3xl">{userDetails?.data?.name}</p>
        <ul className="flex gap-6 border-b-3 w-[400px] border-gray-300 ">
          {list.map((label) => (
            <li
              className={cn(
                "cursor-pointer",
                label.name === tabs
                  ? "text-primary border-b-[1px] border-primary"
                  : " "
              )}
              onClick={() => handleTab(label.name)}
            >
              {label.label}
            </li>
          ))}
        </ul>
        {tabs === "appointments" ? <Appointments /> : <EditProfile />}
      </div>
      <div className="w-[30%] border-l-[1px] border-gray-300">
        <Profile />
      </div>
    </div>
  );
};

export default UserDashboard;
