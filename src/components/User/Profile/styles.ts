import styled from "styled-components";

export const Wrap = styled.div`
  padding: 2em;
`;

export const UserWrap = styled.div`
  padding: 1em 4.5em;
  display: flex;
  justify-content: space-between;
`;

export const UserNameWrap = styled.div`
  display: flex;
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
  height: 100%;
  padding: 0px 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UserInfo = styled.span<{
  size: string;
  weight: string;
}>`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  padding: 3px;
`;

export const UserInfoReformWrap = styled.div`
  padding: 1em;
  button {
    border-radius: 20px;
    border: none;
    padding: 8px 20px;
    font-size: 15px;
    background-color: #f8f8f8;
  }
`;

export const UserPostWrap = styled.div`
  padding: 2em;
  span {
    font-size: 16px;
  }
  hr {
    margin-top: 10px;
    border-width: 1px 0px 0px 0px;
    border-style: solid;
    border-color: #808080;
    height: 1px;
  }
`;
