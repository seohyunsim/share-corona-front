import React from "react";
import {
  UserInfoReformBtn,
  UserInfoReformWrap,
  UserNameWrap,
  UserInfo,
  UserProfileWrap,
  UserWrap,
  Wrap,
  UserInfoWrap,
} from "./styles";
import { BiUser } from "react-icons/bi";

export const Profile = () => {
  return (
    <Wrap>
      <UserWrap>
        <UserNameWrap>
          <UserProfileWrap>
            <BiUser />
          </UserProfileWrap>
          <UserInfoWrap>
            <UserInfo size={"24px"} weight={"800"}>
              닉네임
            </UserInfo>
            <UserInfo size={"14px"} weight={"400"}>
              userID1111
            </UserInfo>
          </UserInfoWrap>
        </UserNameWrap>
        <UserInfoReformWrap>
          <UserInfoReformBtn>프로필 수정</UserInfoReformBtn>
        </UserInfoReformWrap>
      </UserWrap>
    </Wrap>
  );
};
