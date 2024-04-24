import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  className?: string;
}

const Modal = ({ children, className }: ModalProps) => {
  return (
    <div
      className={`fixed flex justify-center w-full h-full my-10 bg-black/20 top-0 left-0 right-0 z-50   overflow-x-hidden overflow-y-auto md:inset-0  md:h-full ${className}`}
    >
      {children}
    </div>
  );
};

export default Modal;
