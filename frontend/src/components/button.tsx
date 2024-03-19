interface ButtonProps {
  className?: string;
  onClick?: () => void;
  type?: "submit" | "reset";
  children: string;
}
const Button = ({ className, type, onClick, children }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={` cursor-pointer bg-primary py-2 px-4 rounded-md text-white font-[600] ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
