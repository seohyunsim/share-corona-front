import { Board } from "../../Board";
import { Confirmed } from "../../Confirmed";
import { SideBar } from "../../Navigation/SideBar";
import { Post } from "../Post";
import { Search } from "../Search";
import { LeftSideWrap, MainWrap, RightSideWrap, Wrap } from "./styles";

export const Main = () => {
  return (
    <Wrap>
      <LeftSideWrap>
        <SideBar />
      </LeftSideWrap>
      <MainWrap>
        <Post />
        <Board />
      </MainWrap>
      <RightSideWrap>
        <Search />
        <Confirmed />
      </RightSideWrap>
    </Wrap>
  );
};
