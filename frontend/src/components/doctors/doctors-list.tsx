import ImageOne from "../../assets/images/doctore02.jpg";
import ImageTwo from "../../assets/images/doctor03.jpg";
import DoctorCard from "./doctor-card";
const doctors = [
  {
    id: "1",
    name: "Dr Agnes",
    specilaization: "Paedriatics",
    totalRating: "244",
    avgRating: 4,
    totalPatients: "1000",
    hospital: "Getrude's children hospital",
    photo: ImageOne,
  },
  {
    id: "1",
    name: "Dr Agnes",
    specilaization: "Paedriatics",
    totalRating: "244",
    avgRating: 5,
    totalPatients: "1000",
    hospital: "Getrude's children hospital",
    photo: ImageOne,
  },
  {
    id: "1",
    name: "Dr Agnes",
    specilaization: "Paedriatics",
    totalRating: "244",
    avgRating: 4,
    totalPatients: "1000",
    hospital: "Getrude's children hospital",
    photo: ImageTwo,
  },
];
const DoctorsList = () => {
  return (
    <div className="container">
      <div className="text-center m-auto">
        <h2 className="text-[16px] leading-[26px] text-heading font-[800] md:text-[36px] md:leading-[70px]">
          Our Specialists
        </h2>
        <p className="">
          We work with the best specialist to deliver top notch diagnostic
          services for you.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] my-3">
        {doctors.map((doctor, index: number) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
