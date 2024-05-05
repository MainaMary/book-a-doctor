import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
const DashboardLayout = ({ children }: IProps) => {
  return (
    <div className="container my-8 flex">
      <div className="w-[70%]">{children}</div>
      <div className="w-[30%] border-l-[1px] border-gray-300">{children}</div>
    </div>
  );
};

export default DashboardLayout;
