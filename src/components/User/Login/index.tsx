import React from "react";
import {
  FindWrap,
  InputWrap,
  SocialLoginWrap,
  TitleWrap,
  Wrap,
} from "./styles";

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
      <FindWrap>
        <span>아이디 찾기</span>
        <span>비밀번호 찾기</span>
      </FindWrap>
      <SocialLoginWrap>
        <div>소셜 로그인</div>
        <img src="https://deciduous-petalite-828.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F77004d8a-f432-4396-aa58-d1b104d47ea1%2F%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2022-03-11_201303.jpg?table=block&id=611442f2-8e05-47a1-9eec-65efc6d7074e&spaceId=757517fd-f82c-4a1d-8b05-6567709f4aa0&width=510&userId=&cache=v2" />
      </SocialLoginWrap>
    </Wrap>
  );
};
