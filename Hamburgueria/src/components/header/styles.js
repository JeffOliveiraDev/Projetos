import styled from "styled-components";

export const StyledHeader = styled.header`
  header {
    display: flex;
    width: 100vw;
    background-color: var(--grey-0);
    height: 140px;
    align-items: center;
  }
  .titleHeader {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    gap: 14px;
  }
  @media (min-width: 800px) {
    .titleHeader {
      width: 80%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  h1 {
    font-size: 26px;
    color: var(--grey-100);
  }
  span {
    color: var(--red-secondary);
    font-size: 18px;
  }
  .boxInputButton {
    border: 1px solid red;
    background-color: #ffffff;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0px 10px 0px 15px;

    border: 2px solid var(--grey-20);
    border-radius: 8px;
  }
  .boxInputButton:hover {
    border: 2px solid var(--grey-100);
  }
  .boxInputButton input {
    border: none;
    background-color: none;
  }
  .boxInputButton input::placeholder {
    color: var(--grey-20);
    font-size: var(--headline-16);
    font-weight: 400;
  }
`;
