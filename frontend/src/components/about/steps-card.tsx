interface Props {
  steps: {
    desc: string;
    image: string;
    title: string;
  };
}
const StepsCard = ({ steps }: Props) => {
  return (
    <div>
      <img
        src={steps.image}
        alt={steps.title}
        className="m-auto w-[150px] h-[150px]"
      />
      <h2 className="mt-8 text-[24px] leading-9 text-heading font-[700]">
        {steps.title}
      </h2>
      <p className="text-[16px] leading-7 font-[400] text-text mt-4">
        {steps.desc}
      </p>
    </div>
  );
};

export default StepsCard;
