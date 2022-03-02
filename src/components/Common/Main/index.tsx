import { Board } from "../../Board";
import { SideBar } from "../../Navigation/SideBar";
import { Post } from "../Post";
import { MainWrap, Wrap } from "./styles";

export const Main = () => {
  return (
    <Wrap>
      <SideBar />
      <MainWrap>
        <Post />
        <Board />
      </MainWrap>
    </Wrap>
  );
};
