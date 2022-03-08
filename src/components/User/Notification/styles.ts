import styled from "styled-components";

export const TitleWrap = styled.div`
  position: sticky;
  top: 0px;
  background-color: #ffffff;
  h2 {
    padding: 20px;
    font-weight: 300;
  }
  hr {
    margin-top: 10px;
    border-width: 1.5px 0px 0px 0px;
    border-style: solid;
    border-color: rgb(233, 233, 233);
    height: 1px;
  }
`;

export const NotificationWrap = styled.div`
  border-bottom: 0.8px solid rgb(233, 233, 233);
  padding: 1em;
  display: flex;
  flex-direction: column;
  span {
    padding: 2.5px;
  }
`;
