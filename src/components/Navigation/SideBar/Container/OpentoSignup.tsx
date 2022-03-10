import Modal from "../../../Common/Modal";
import { SignUp } from "../../../User/SignUp";
import { Board } from ".././styles";

interface ModalOpenProps {
  OpenModal: boolean;
  onClickToggleModal: () => void;
}

export const OpentoSignup = ({
  OpenModal,
  onClickToggleModal,
}: ModalOpenProps) => {
  return (
    <div>
      {OpenModal && (
        <Modal onClickToggleModal={onClickToggleModal} children={<SignUp />} />
      )}
      <Board padding={"5px 18px"} onClick={onClickToggleModal}>
        회원가입
      </Board>
    </div>
  );
};
