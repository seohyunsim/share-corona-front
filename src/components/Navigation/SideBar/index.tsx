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
import { OpentoLogin } from "./Container/OpentoLogin";
import { OpentoSignup } from "./Container/OpentoSignup";

export const SideBar = () => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

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
            <OpentoLogin />
            <OpentoSignup
              OpenModal={isOpenModal}
              onClickToggleModal={onClickToggleModal}
            />
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
