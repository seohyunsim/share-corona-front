import styled from "styled-components";

export const Wrap = styled.div`
  border-right: 1px solid rgb(233, 233, 233);
  width: 14.2em;
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
`;

export const PointColor = styled.div`
  color: rgb(93, 104, 196);
  margin-right: 5px;
`;

export const MenuWrap = styled.div`
  position: fixed;
  /* border: 1px solid; */
  width: 14.2em;
  padding-top: 140px;
`;

export const BoardWrap = styled.ul`
  list-style: none;
  text-align: right;
  padding: 0px;
`;

export const Board = styled.li`
  padding: 18px;
  cursor: pointer;
`;

export const UserWrap = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  svg {
    font-size: 22px;
    padding: 15px 5px;
    cursor: pointer;
  }
`;
