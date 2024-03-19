import ImageOne from "../../assets/images/doctor03.jpg";
import FaqCard from "./faq-card";
const faqs = [
  {
    label: "What is your medical care ?",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro vel ipsum fuga.",
  },
  {
    label: "What happens if I have an emergency ?",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro vel ipsum fuga.",
  },
  {
    label: "What if I need to go to the hospital ?",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro vel ipsum fuga.",
  },
  {
    label: "Can I visit a medical officer ?",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro vel ipsum fuga.",
  },
  {
    label: "Do you provide urgent care ?",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro vel ipsum fuga.",
  },
];
const Faq = () => {
  return (
    <section>
      <div className="container">
        <div className="text-center m-auto">
          <h2 className="text-[16px] leading-[26px] text-heading font-[800] md:text-[36px] md:leading-[70px]">
            Frequently asked questions.
          </h2>
          <p className="">
            Here are someof the questions Frequently asked and the solutions.
          </p>
        </div>
        <div className="flex justify-between gap-12 my-12">
          <div className="w-1/2 hidden md:block">
            <img src={ImageOne} alt="image-one" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-[16px] leading-[20px] text-heading font-[800] md:text-[26px] md:leading-[40px]">
              Most of the frequently asked questions by our patients
            </h2>
            <div className="mt-4">
              {faqs.map((faq, index) => (
                <FaqCard key={index} faq={faq} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
