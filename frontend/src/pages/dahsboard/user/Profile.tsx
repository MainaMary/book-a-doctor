import { useAuth } from "../../../context/useAuthContext";
const Profile = () => {
  const {
    userDetails: { data },
  } = useAuth();

  return (
    <div className="px-6">
      <div className="w-[100px] mb-2 h-[100px] border border-solid rounded-full">
        <img src={data.photo} className="rounded-full w-auto cover  h-auto" />
      </div>
      <div className="space-y-3">
        <p className="font-bold text-black text-3xl">{data.name}</p>
        <p>{data.role}</p>
        <p className="text-primary underline cursor-pointer">Edit profile</p>
      </div>
    </div>
  );
};

export default Profile;
