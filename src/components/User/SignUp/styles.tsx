import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

export const TitleWrap = styled.div`
  display: flex;
  font-size: 33px;
  padding: 4px;
  cursor: default;
  div {
    color: #5d68c4;
    margin: 0px 12px;
  }
  span {
    font-size: 14px;
    padding-top: 12px;
    padding-left: 13em;
    color: #2f3675;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 92%;
  padding: 1em;
  span {
    width: 79%;
    text-align: left;
    padding: 8px 3px;
    cursor: default;
    span {
      color: #5d68c4;
      font-size: 13px;
    }
  }
  input {
    width: 75%;
    padding: 12px;
    margin-bottom: 10px;
    border: 1.4px solid #dadada;
    box-shadow: 0px 0px 2.5px 0.5px rgba(0, 0, 0, 0.05);
    border-radius: 4.5px;
    outline-style: none;
  }
`;

export const BtnWrap = styled.div`
  text-align: right;
  padding-right: 12px;
  button {
    font-size: 14.5px;
    padding: 12px 2em;
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
