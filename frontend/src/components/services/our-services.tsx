import ServiceCard from "./service-card";
import { GiBrain } from "react-icons/gi";
import { RiMentalHealthLine } from "react-icons/ri";
import { MdOutlineChildCare } from "react-icons/md";
import { FaChildren } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";
import { FaDisease } from "react-icons/fa";
const services = [
  {
    title: "Mental Health",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, atque? Inventore totam sapiente cupiditate voluptatum animi voluptates odio esse vero",
    id: "1",
    icon: <RiMentalHealthLine size={28} className="text-primary" />,
  },
  {
    title: "Neurology",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, atque? Inventore totam sapiente cupiditate voluptatum animi voluptates odio esse vero",
    id: "2",
    icon: <GiBrain size={28} className="text-primary" />,
  },
  {
    title: "Labor & Delivery",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, atque? Inventore totam sapiente cupiditate voluptatum animi voluptates odio esse vero",
    id: "3",
    icon: <MdOutlineChildCare size={28} className="text-primary" />,
  },
  {
    title: "Peadriatics",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, atque? Inventore totam sapiente cupiditate voluptatum animi voluptates odio esse vero",
    id: "4",
    icon: <FaChildren size={28} className="text-primary" />,
  },
  {
    title: "Vaccinations",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, atque? Inventore totam sapiente cupiditate voluptatum animi voluptates odio esse vero",
    id: "5",
    icon: <GiMedicines size={28} className="text-primary" />,
  },
  {
    title: "Diabetes treatment",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, atque? Inventore totam sapiente cupiditate voluptatum animi voluptates odio esse vero",
    id: "6",
    icon: <FaDisease size={28} className="text-primary" />,
  },
];

const OurServices = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="text-center m-auto">
            <h2 className="text-[16px] leading-[26px] text-heading font-[800] md:text-[36px] md:leading-[70px]">
              Our medical services
            </h2>
            <p className="">
              We work with the best specialist to deliver top notch diagnostic
              services for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] my-4 m-auto">
            {services.map((label) => (
              <ServiceCard key={label.id} label={label} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
