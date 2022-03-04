import React from "react";
import {
  UserInfoReformBtn,
  UserInfoReformWrap,
  UserInfoWrap,
  UserProfileWrap,
  UserWrap,
  Wrap,
} from "./styles";
import { BiUser } from "react-icons/bi";

export const Profile = () => {
  return (
    <Wrap>
      <UserWrap>
        <UserProfileWrap>
          <BiUser />
        </UserProfileWrap>
        <UserInfoWrap>유저 닉네임입니다 userId</UserInfoWrap>
        <UserInfoReformWrap>
          <UserInfoReformBtn>프로필 수정</UserInfoReformBtn>
        </UserInfoReformWrap>
      </UserWrap>
    </Wrap>
  );
};
