import { MdLocalHospital } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../button";
import { footerData } from "../../constants";
import FooterList from "../footerlist";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { getCurrentYear } from "../../utils";
const socialIcons = [
  { path: "/linkedIn", icon: <FaLinkedin /> },
  { path: "/insta", icon: <FaSquareInstagram /> },
  { path: "/twitter", icon: <FaTwitter /> },
  { path: "/facebook", icon: <FaFacebookF /> },
];
const { partners, services, company } = footerData;
const Footer = () => {
  return (
    //#0C2234
    <footer className="bg-[#56538f]">
      <div className="container text-white">
        <div className="py-3">
          <Link to={"/"} className="flex gap-2 ">
            <MdLocalHospital color="text-primary" size={30} />
            <span className="text-2xl font-bold">HealthCare</span>
          </Link>
        </div>
        <div className="flex gap-30 my-2">
          <div className=" text-white w-1/2">
            <p className="w-[80%]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et,
              itaque nam explicabo maxime repellendus quos possimus.
            </p>
            <Button className="my-2">Let's get to work</Button>
          </div>
          <div className="flex justify-between w-1/2">
            <FooterList label={partners.label} items={partners.list} />
            <FooterList label={services.label} items={services.list} />
            <FooterList label={company.label} items={company.list} />
          </div>
        </div>
      </div>
      <div className="border py-3 border-t-2 border-white">
        <div className="container h-auto items-center flex justify-between">
          <p className="text-white">{`${getCurrentYear()} Healthcare. All rights reserved`}</p>
          <div className="flex gap-2">
            {socialIcons.map((icon) => (
              <Link
                to={icon.path}
                className="border items-center rounded-full flex justify-center m-auto w-[40px] h-[40px] border-white text-white"
              >
                {icon.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
