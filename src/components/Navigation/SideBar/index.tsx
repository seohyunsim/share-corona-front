import {
  Wrap,
  TitleWrap,
  PointColor,
  MenuWrap,
  Menus,
  UserWrap,
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
        <Menus>확진톡</Menus>
        <Menus>코로나톡</Menus>
        <Menus>응원톡</Menus>
      </MenuWrap>
      <UserWrap>
        <BiUser />
        <GrNotification />
      </UserWrap>
    </Wrap>
  );
};
