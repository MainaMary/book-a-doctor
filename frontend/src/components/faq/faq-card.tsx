import { useState } from "react";
import { HiMinus } from "react-icons/hi";
import { HiPlus } from "react-icons/hi";
interface Props {
  faq: {
    label: string;
    desc: string;
  };
  index: number;
}
const FaqCard = ({ faq, index }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="p-3 border border-solid border-[#D9DCE2] cursor-pointer my-3">
      <div className="flex justify-between items-center h-auto gap-5">
        <h3 className="leading-7 text-heading text-base lg:leading-8 w-[80%]">
          {faq.label}
        </h3>
        <div
          className={`${
            isOpen && "bg-primary text-white border-none"
          } w-7 h-7 lg:w-8 lg:h-8 border border-solid border-[#141F21] rounded flex items-center justify-center m-auto `}
          onClick={handleToggle}
        >
          {isOpen ? <HiMinus onClick={handleToggle} /> : <HiPlus />}
        </div>
      </div>
      {isOpen && index && (
        <div className="my-3">
          <p className="text-[14px]">{faq.desc}</p>
        </div>
      )}
    </div>
  );
};

export default FaqCard;
