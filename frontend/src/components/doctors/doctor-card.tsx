import Rating from "@mui/material/Rating";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
interface Props {
  doctor: {
    id: string;
    name: string;
    specilaization: string;
    totalRating: string;
    avgRating: number;
    totalPatients: string;
    hospital: string;
    photo: string;
  };
}

const DoctorCard = ({ doctor }: Props) => {
  const { name, photo, specilaization, totalPatients, avgRating, hospital } =
    doctor;
  return (
    <div className="p-3 lg:p-5">
      <div className="h-[400px] w-[350px]">
        <img className="rounded-md w-full h-full" src={photo} alt={name} />
      </div>
      <h2 className="text-[12px] eading-30 lg:text-[16px] text-heading font-bold">
        {name}
      </h2>
      <div className="flex justify-between items-center mt-2 h-auto lg:mt-4">
        <span className="border border-primary text-primary rounded-md px-4 py-2 text-center font-smeibold leading-4 lg:leading-5">
          {specilaization}
        </span>
        <div className="flex h-auto items-center gap-4">
          <Rating value={avgRating} />
        </div>
      </div>
      <div className="flex justify-between mt-3">
        <div>
          <h2 className="text-heading">+{totalPatients}</h2>
          <p>{hospital}</p>
        </div>
        <Link
          to="/doctors"
          className="w-[40px] h-[40px] rounded-full border border-solid border-primary hover:border-white flex items-center justify-center group hover:bg-primary hocer:border-none"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-6 text-primary" />
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
