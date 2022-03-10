import { useCallback, useState } from "react";
import Modal from "../../../Common/Modal";
import { Login } from "../../../User/Login";
import { Board } from ".././styles";

export const OpentoLogin = () => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);
  return (
    <div>
      {isOpenModal && (
        <Modal onClickToggleModal={onClickToggleModal} children={<Login />} />
      )}
      <Board padding={"15px 18px"} onClick={onClickToggleModal}>
        로그인
      </Board>
    </div>
  );
};
