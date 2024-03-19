import HeroImg from "../assets/images/hero03.png";
import Button from "../components/button";
import OurServices from "../components/services/our-services";
import Feature from "../components/features/feature";
import AboutSteps from "../components/about/about-steps";
import DoctorsList from "../components/doctors/doctors-list";
import Faq from "../components/faq/faq-list";
import Testimonials from "../components/testimonials/testimonials";
const Home = () => {
  return (
    <div className="bg-bg py-8">
      <div className="container ">
        <div className="flex flex-col h-auto items-center lg:flex-row gap-[60px] justify-between">
          <div className="lg:w-[60%] w-full">
            <h1 className="text-[36px] leading-[46px] text-heading font-[800] md:text-[60px] md:leading-[70px]">
              Book Your <span className="text-primary">Doctor Appointment</span>{" "}
              Online
            </h1>
            <p className="">
              A healtheir tommorrow starts today.Schedule your Appointemnt. You
              wellness. Our expertise. Set up an appointment today.
            </p>
            <Button className="mt-8">Book an appointment</Button>
          </div>
          <div className="lg:w-[60%] w-full">
            <img src={HeroImg} alt="hero-img" className="w-full h-full" />
            <div className="absolute top-0 left-0 w-full h-full bg-transparent"></div>
          </div>
        </div>
      </div>
      <AboutSteps />
      <OurServices />
      <Feature />
      <DoctorsList />
      <Faq />
      <Testimonials />
    </div>
  );
};

export default Home;
