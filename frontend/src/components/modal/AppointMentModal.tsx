import Modal from "./Modal";
import Title from "../dashboard/Title";
interface Props {
  handleModal: () => void;
  openModal: boolean;
}
const AppointMentModal = ({ openModal, handleModal }: Props) => {
  if (!openModal) null;
  return (
    <Modal>
      <div className=" text-center m-auto w-[70%] lg:w-[40%] bg-white p-5 rounded-[10px] shadow-lg shadow-[rgba(0, 0, 0, 0.25)]">
        <div className="flex justify-between h-auto items-center">
          <Title>Book an appointment</Title>
          <p className="cursor-pointer" onClick={handleModal}>
            Close
          </p>
        </div>
        <div className="flex gap-3"></div>
      </div>
    </Modal>
  );
};

export default AppointMentModal;
