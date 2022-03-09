import { Confirmed } from "../../Confirmed";
import { SideBar } from "../../Navigation/SideBar";
import { Search } from "../Search";
import { LeftSideWrap, MainWrap, RightSideWrap, Wrap } from "./styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Union } from "../../Board/Union";
import { CoronaTalk } from "../../Board/CoronaTalk";
import { ConfirmedTalk } from "../../Board/ConfirmedTalk";
import { CheeringTalk } from "../../Board/CheeringTalk";
import { Profile } from "../../User/Profile";
import { Notification } from "../../User/Notification";
import { Login } from "../../User/Login";

export const Main = () => {
  return (
    <Wrap>
      <LeftSideWrap>
        <SideBar />
      </LeftSideWrap>
      <MainWrap>
        <Routes>
          <Route path="/" element={<Union />} />
          <Route path="/coronaTalk" element={<CoronaTalk />} />
          <Route path="/confirmedTalk" element={<ConfirmedTalk />} />
          <Route path="/cheeringTalk" element={<CheeringTalk />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
      </MainWrap>
      <RightSideWrap>
        <Search />
        <Confirmed />
      </RightSideWrap>
    </Wrap>
  );
};
