import styled from "styled-components";

export const Wrap = styled.div`
  border: 1px solid;
  padding: 2em;
`;

export const UserWrap = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
`;

export const UserProfileWrap = styled.div`
  background-color: #f8f8f8;
  width: 7.5em;
  height: 7.5em;
  border-radius: 50%;
  display: grid;
  align-items: center;
  svg {
    font-size: 60px;
    margin: 0 auto;
  }
`;

export const UserInfoWrap = styled.div`
  border: 1px solid;
  display: flex;
  flex-direction: column;
`;

export const UserInfoReformWrap = styled.div`
  border: 1px solid blue;
`;

export const UserInfoReformBtn = styled.button`
  background-color: lightgray;
`;
