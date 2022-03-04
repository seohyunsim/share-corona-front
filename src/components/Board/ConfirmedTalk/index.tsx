import React from "react";
import { Post } from "../../Common/Post";
import { PostingBox, Wrap } from "../styles";

export const ConfirmedTalk = () => {
  return (
    <Wrap>
      <Post />
      <PostingBox>확진자톡 입니다</PostingBox>
      <PostingBox />
      <PostingBox />
      <PostingBox />
      <PostingBox />
      <PostingBox />
      <PostingBox />
    </Wrap>
  );
};
