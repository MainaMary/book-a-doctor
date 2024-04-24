import { ChildrenProps } from "../../types";

const Title = ({ children }: ChildrenProps) => {
  return <p className=" mb-4 text-primary text-xl leading-3">{children}</p>;
};

export default Title;
