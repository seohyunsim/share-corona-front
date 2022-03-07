import React from "react";
import {
  UserInfoReformWrap,
  UserNameWrap,
  UserInfo,
  UserProfileWrap,
  UserWrap,
  Wrap,
  UserInfoWrap,
  UserPostWrap,
} from "./styles";
import { BiUser } from "react-icons/bi";
import { PostingBox } from "../../Board/styles";

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
            <UserInfo size={"16px"} weight={"400"}>
              userID1111
            </UserInfo>
          </UserInfoWrap>
        </UserNameWrap>
        <UserInfoReformWrap>
          <button>프로필 수정</button>
        </UserInfoReformWrap>
      </UserWrap>
      <UserPostWrap>
        <span>작성글</span>
        <hr />
        <PostingBox />
        <PostingBox />
        <PostingBox />
        <PostingBox />
        <PostingBox />
        <PostingBox />
      </UserPostWrap>
    </Wrap>
  );
};
