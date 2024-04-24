import { useState } from "react";
import { useAuth } from "../../../context/useAuthContext";
import Button from "../../../components/button";
import AppointMentModal from "../../../components/modal/AppointMentModal";
const DoctorProfile = () => {
  const [openModal, setOpenModal] = useState(false);
  const {
    userDetails: { data },
  } = useAuth();
  console.log({ data });
  const handleModal = () => {
    setOpenModal((prev) => !prev);
  };
  return (
    <div className="px-6">
      <div className="w-[100px] mb-2 h-[100px] border border-solid rounded-full">
        <img src={data.photo} className="rounded-full w-auto cover  h-auto" />
      </div>
      <div className="space-y-3">
        <p className="font-bold text-black text-3xl">{data.name}</p>
        <p className="border-2 font-semibold border-primary p-2 rounded-md text-center text-base text-primary w-[50%]">
          Peadriatics
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
          reprehenderit architecto placeat.
        </p>
        <p className="text-primary underline cursor-pointer">Edit profile</p>
        <Button onClick={handleModal}>Book an appointment</Button>
        {openModal && (
          <AppointMentModal openModal={openModal} handleModal={handleModal} />
        )}
      </div>
    </div>
  );
};

export default DoctorProfile;
