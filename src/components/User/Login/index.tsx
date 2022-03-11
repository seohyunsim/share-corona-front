import React from "react";
import { InputWrap, TitleWrap, Wrap } from "./styles";

export const Login = () => {
  return (
    <Wrap>
      <TitleWrap>
        <div>share</div> corona
      </TitleWrap>
      <InputWrap>
        <input type="text" placeholder="ID" />
        <input type="password" placeholder="PASSWORD" />
        <button>로그인 하기</button>
      </InputWrap>
    </Wrap>
  );
};
