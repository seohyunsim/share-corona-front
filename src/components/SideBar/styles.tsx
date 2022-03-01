import styled from "styled-components";

export const Wrap = styled.div`
  border: 1px solid;
  border-right: 1px solid rgb(233, 233, 233);
`;

export const TitleWrap = styled.div`
  width: 10%;
  padding: 10px 5px;
  margin: 10px 20px;
  text-align: center;
  box-shadow: 0px 0px 2.5px 0.5px rgba(0, 0, 0, 0.05);
  border-radius: 4.5px;
  border: 0.5px solid rgb(233, 233, 233);
`;

export const MenuWrap = styled.ul`
  /* border: 1px solid red; */
  list-style: none;
  text-align: right;
  /* margin: 0px; */
`;

export const Menus = styled.li`
  /* border: 1px solid; */
  padding: 12px;
  cursor: pointer;
`;

export const UserWrap = styled.div`
  /* border: 1px solid blue; */
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  svg {
    font-size: 23px;
    padding: 10px 5px;
    cursor: pointer;
  }
`;
