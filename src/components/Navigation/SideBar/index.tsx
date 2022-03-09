import {
  Wrap,
  TitleWrap,
  PointColor,
  UserWrap,
  BoardWrap,
  Board,
  MenuWrap,
  StyledLink,
} from "./styles";
import { BiUser } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";
import { useCallback, useState } from "react";
import Modal from "../../Common/Modal";
import { Login } from "../../User/Login";
import Portal from "../../Common/Portal";

export const SideBar = () => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const selector = "portal";

  return (
    <Wrap>
      <StyledLink to="/">
        <TitleWrap>
          <PointColor>share</PointColor>corona
        </TitleWrap>
      </StyledLink>
      <MenuWrap>
        <BoardWrap>
          <StyledLink to="/confirmedTalk">
            <Board padding={"18px"}>확진톡</Board>
          </StyledLink>
          <StyledLink to="/coronaTalk">
            <Board padding={"18px"}>코로나톡</Board>
          </StyledLink>
          <StyledLink to="/cheeringTalk">
            <Board padding={"18px"}>응원톡</Board>
          </StyledLink>
        </BoardWrap>
        <UserWrap>
          <div>
            <div>
              {isOpenModal && (
                <Modal onClickToggleModal={onClickToggleModal}>
                  <Portal id="portal">
                    <Login />
                  </Portal>
                </Modal>
              )}
              <Board padding={"22px 18px"} onClick={onClickToggleModal}>
                로그인
              </Board>
            </div>
            <Board padding={"5px 18px"}>회원가입</Board>
          </div>
          <StyledLink to="/profile">
            <BiUser />
          </StyledLink>
          <StyledLink to="/notification">
            <GrNotification />
          </StyledLink>
        </UserWrap>
      </MenuWrap>
    </Wrap>
  );
};
