import { ReactNode } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

interface Props {
  label: { title: string; desc: string; id: string; icon: ReactNode };
}

const ServiceCard = ({ label }: Props) => {
  return (
    <div className="px-3 lg:px-5 py-4 m-auto">
      <div className="flex gap-2 h-auto items-center">
        <div>{label.icon}</div>
        <h2 className="text-[24px] leading-9 text-heading font-[700]">
          {label.title}
        </h2>
      </div>

      <p className="text-[16px] leading-7 font-[400] text-text mt-4">
        {label.desc}
      </p>
      <div className="flex h-auto items-center">
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

export default ServiceCard;
