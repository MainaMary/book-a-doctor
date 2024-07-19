import { useState } from "react";
import DoctorProfile from "./DoctorProfile";
import Reviews from "./Reviews";
import { useAuth } from "../../../context/useAuthContext";
import { cn } from "../../../utils/classnames";
const DoctorDashboard = () => {
  const [tabs, setTabs] = useState("profile");
  const {
    userDetails: { data },
  } = useAuth();
  const list = [
    {
      name: "profile",
      label: "Profile",
    },
    {
      name: "reviews",
      label: "Reviews",
    },
  ];
  const handleTabNavigation = (name: string) => {
    setTabs(name);
  };
  return (
    <div className="container my-8 flex">
      <div className="w-[70%]">
        <p className="font-bold text-3xl">{data?.name}</p>
        <ul className="flex gap-6 border-b-3 w-[400px] border-gray-300 ">
          {list.map((label) => (
            <li
              className={cn(
                "cursor-pointer",
                label.name === tabs
                  ? "text-primary border-b-[1px] border-primary"
                  : " "
              )}
              onClick={() => handleTabNavigation(label.name)}
            >
              {label.label}
            </li>
          ))}
        </ul>
        {tabs === "profile" ? <DoctorProfile /> : <Reviews />}
      </div>
      <div className="w-[30%] border-l-[1px] border-gray-300">hfehg</div>
    </div>
  );
};

export default DoctorDashboard;
