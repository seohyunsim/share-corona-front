import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrap = styled.div`
  border-right: 1px solid rgb(233, 233, 233);
  width: 14.2em;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: black;
  }
`;

export const TitleWrap = styled.div`
  width: 8em;
  padding: 11px 5px;
  margin: 25px;
  box-shadow: 0px 0px 2.5px 0.5px rgba(0, 0, 0, 0.05);
  border-radius: 4.5px;
  border: 0.5px solid rgb(233, 233, 233);
  font-weight: bolder;
  font-size: 18px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: fixed;
  z-index: 2;
  cursor: pointer;
`;

export const PointColor = styled.div`
  color: rgb(93, 104, 196);
  margin-right: 5px;
`;

export const MenuWrap = styled.div`
  position: fixed;
  width: 14.2em;
  padding-top: 140px;
`;

export const BoardWrap = styled.ul`
  list-style: none;
  text-align: right;
  padding: 0px;
`;

export const Board = styled.li<{
  padding: string;
}>`
  padding: ${(props) => props.padding};
  cursor: pointer;
`;

export const UserWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  div {
    list-style: none;
    text-align: right;
    padding-bottom: 20px; /*프로필 숨길때 지우기*/
  }
  svg {
    font-size: 22px;
    padding: 15px 20px;
    cursor: pointer;
  }
`;
