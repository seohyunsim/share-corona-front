import styled from "styled-components";

export const Wrap = styled.div`
  padding: 25px 5px;
  text-align: center;
  position: -webkit-sticky; /* 사파리 브라우저 지원 */
  position: sticky;
  top: 4px;
  background-color: #ffffff;
`;

export const SearchInput = styled.input.attrs({
  placeholder: "검색하기",
})`
  width: 70%;
  height: 2.2em;
  box-shadow: 0px 0px 2.5px 0.5px rgba(0, 0, 0, 0.05);
  border-radius: 50px;
  border: 0.5px solid rgb(230, 230, 230);
  padding: 8px 1vw;
  &:focus {
    outline: none;
  }
`;
