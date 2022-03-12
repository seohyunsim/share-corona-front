import React from "react";
import { BtnWrap, InputWrap, TitleWrap, Wrap } from "./styles";

export const SignUp = () => {
  return (
    <Wrap>
      <TitleWrap>
        <div>sign</div>up
        <span>* 는 필수 입력항목입니다.</span>
      </TitleWrap>
      <InputWrap>
        <span>
          아이디 <span>*</span>
        </span>
        <input type="text" placeholder="ID" />
        <span>
          비밀번호 <span>*</span>
        </span>
        <input type="password" placeholder="PASSWORD" />
        <span>
          비밀번호 확인 <span>*</span>
        </span>
        <input type="password" placeholder="REPASSWORD" />
        <span>
          닉네임 <span>미 설정시 본인의 id로 설정됩니다.</span>
        </span>
        <input type="text" placeholder="NICKNAME (중복체크 버튼 추가할거얌)" />
        <span>내 동네</span>
        <input type="text" placeholder="LOCATION (이거 드롭박스로 바꿀거임)" />
      </InputWrap>
      <BtnWrap>
        <button>회원가입 하기</button>
      </BtnWrap>
    </Wrap>
  );
};
