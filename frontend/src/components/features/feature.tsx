import Button from "../button";
import { Link } from "react-router-dom";
import Image from "../../assets/images/doctor01.jpg";
const steps = [
  "Schedule appointment directly",
  "Search for you physician and contact them",
  "View your physician who are accepting new patients, use the online scheduling tool to select an appointment ",
  ,
];
const Feature = () => {
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between flex-col lg:flex-row">
          <div className="w-[40%]">
            <h2 className="heading">
              Get virtual treatment <br /> anytime
            </h2>
            <ul className="py-8">
              {steps.map((step, index: number) => (
                <li className="flex gap-3 my-2">
                  <span> {index + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
            <Link to={"/"}>
              <Button>Learn more</Button>
            </Link>
          </div>
          <div className="relative z-10 w-[50%] h-[500px] m-auto">
            <img src={Image} alt="img" className="h-full m-auto" />
            <div className="absolute bottom-[100px] left-0 bottom-14w-[200px] bg-white">
              <div>
                <p>Tue 10.100am</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
