import Doctor from "../../assets/images/doctor.svg";
import Profile from "../../assets/images/profile.svg";
import Appointment from "../../assets/images/appointment.svg";
import Solution from "../../assets/images/solution.svg";
import StepsCard from "./steps-card";

const AboutSteps = () => {
  const steps = [
    {
      title: "Search Doctor",
      desc: "We are here to help you whenever you feel ill, but keeping you healthy is our priority",
      image: Doctor,
    },
    {
      title: "Check doctor Profile",
      desc: "We can help you find available vaccine appointements near you or send notifications based on availability",
      image: Profile,
    },
    {
      title: "Schedule appointment",
      desc: "From seasonal allergies to burn identification and treatments , we have resources",
      image: Appointment,
    },
    {
      title: "Get your solution",
      desc: "We can help you find available near you",
      image: Solution,
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="text-center">
          <h3 className="text-primary uppercase leading-10 my-4">
            Fastest solutions
          </h3>
          <h2 className="text-[16px] leading-[26px] text-heading font-[800] md:text-[36px] md:leading-[70px]">
            Steps to get your soultions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-[30px] my-4 m-auto">
            {steps.map((label, index: number) => (
              <StepsCard key={index} steps={label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSteps;
