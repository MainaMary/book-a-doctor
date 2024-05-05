import useFetch from "../../../api/useFetch";
import { useAuth } from "../../../context/useAuthContext";
import { api } from "../../../constants/config";
import { useEffect } from "react";
const EditProfile = () => {
  const {
    userDetails: { data },
  } = useAuth();
  const { data: userProfile, isLoading } = useFetch(
    ["userProfile"],
    `http:localhost:8000/api/v1/user/profile/user/${data._id}`
  );
  useEffect(() => {
    const getUserProfile = () => {};
  }, []);
  return <div>{isLoading ? "loading..." : JSON.stringify(userProfile)}</div>;
};

export default EditProfile;
