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
            <Board>확진톡</Board>
          </StyledLink>
          <StyledLink to="/coronaTalk">
            <Board>코로나톡</Board>
          </StyledLink>
          <StyledLink to="/cheeringTalk">
            <Board>응원톡</Board>
          </StyledLink>
        </BoardWrap>
        <UserWrap>
          <StyledLink to="/profile">
            <BiUser />
          </StyledLink>
          <GrNotification />
        </UserWrap>
      </MenuWrap>
    </Wrap>
  );
};
