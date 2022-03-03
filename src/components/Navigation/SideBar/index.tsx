import {
  Wrap,
  TitleWrap,
  PointColor,
  UserWrap,
  BoardWrap,
  Board,
  MenuWrap,
} from "./styles";
import { BiUser } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";

export const SideBar = () => {
  return (
    <Wrap>
      <TitleWrap>
        <PointColor>share</PointColor>corona
      </TitleWrap>
      <MenuWrap>
        <BoardWrap>
          <Board>확진톡</Board>
          <Board>코로나톡</Board>
          <Board>응원톡</Board>
        </BoardWrap>
        <UserWrap>
          <BiUser />
          <GrNotification />
        </UserWrap>
      </MenuWrap>
    </Wrap>
  );
};
