import styled from "styled-components";

export const Wrap = styled.div`
  padding: 25px 0px;
  text-align: center;
`;

export const PostInput = styled.input.attrs({
  placeholder: "글을 작성해 보세요.",
})`
  width: 86%;
  height: 2.2em;
  box-shadow: 0px 0px 2.5px 0.5px rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  border: 0.5px solid rgb(200, 200, 200);
  padding: 8px 1vw;
  &:focus {
    outline: none;
  }
`;
