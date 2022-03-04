import React from "react";
import { Post } from "../../Common/Post";
import { PostingBox, Wrap } from "../styles";

export const Union = () => {
  return (
    <Wrap>
      <Post />
      <PostingBox>메인화면 입니다</PostingBox>
      <PostingBox />
      <PostingBox />
      <PostingBox />
      <PostingBox />
      <PostingBox />
      <PostingBox />
    </Wrap>
  );
};
