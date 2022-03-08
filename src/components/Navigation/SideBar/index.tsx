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

export const SideBar = () => {
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
            <Board padding={"22px 18px"}>로그인</Board>
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
