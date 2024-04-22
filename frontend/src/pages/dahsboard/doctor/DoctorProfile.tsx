import { useAuth } from "../../../context/useAuthContext";
const DoctorProfile = () => {
  const {
    userDetails: { data },
  } = useAuth();
  console.log({ data });
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
      </div>
    </div>
  );
};

export default DoctorProfile;
