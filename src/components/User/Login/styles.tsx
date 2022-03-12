import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

export const TitleWrap = styled.div`
  display: flex;
  font-size: 32px;
  justify-content: center;
  padding: 0.8em;
  cursor: default;
  div {
    color: #5d68c4;
    margin: 0px 12px;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-top: 1.5em;
  input {
    width: 75%;
    margin-bottom: 20px;
    padding: 1.5em 2em;
    border: 1.4px solid #dadada;
    box-shadow: 0px 0px 2.5px 0.5px rgba(0, 0, 0, 0.05);
    border-radius: 4.5px;
    outline-style: none;
  }
  button {
    width: 87%;
    font-size: 16px;
    padding: 1.2em;
    border: none;
    border: 1.4px solid #dadada;
    box-shadow: 0px 0px 2.5px 0.2px rgba(129, 146, 224, 0.288);
    border-radius: 4.5px;
    background-color: rgba(129, 146, 224, 0.116);
    color: #2f3675;
    cursor: pointer;
    &:hover {
      background-color: rgba(129, 146, 224, 0.176);
    }
  }
`;

export const FindWrap = styled.div`
  width: 87%;
  margin: 0 auto;
  padding: 1em 0px;
  display: flex;
  justify-content: space-evenly;
  span {
    font-size: 14px;
    cursor: pointer;
    color: #313131;
  }
`;

export const SocialLoginWrap = styled.div`
  width: 87%;
  margin: 0 auto;
  padding: 2em 0px;
  div {
    display: flex;
    flex-basis: 100%;
    align-items: center;
    font-size: 13.5px;
    margin: 8px 0px;
    cursor: default;
    &::before,
    &::after {
      content: "";
      flex-grow: 1;
      background: rgba(0, 0, 0, 0.616);
      height: 0.1px;
      font-size: 0px;
      line-height: 0px;
      margin: 0px 10px;
    }
  }
  img {
    width: 7.5em;
  }
`;
