import styled from "styled-components";

export const Wrap = styled.div`
  padding: 25px 10px;
  text-align: center;
  position: -webkit-sticky; /* 사파리 브라우저 지원 */
  position: sticky;
  top: 4px;
  background-color: #ffffff;
  z-index: 99;
`;

export const PostInput = styled.input.attrs({
  placeholder: "글을 작성해 보세요.",
})`
  width: 95%;
  height: 2.2em;
  box-shadow: 0px 0px 2.5px 0.5px rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  border: 0.5px solid rgb(200, 200, 200);
  padding: 8px 1vw;
  &:focus {
    outline: none;
  }
`;
