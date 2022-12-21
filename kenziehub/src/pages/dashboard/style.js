import styled from "styled-components";

export const StyledDashboard = styled.div`
  background-color: var(--grey-4);
  height: 73px;
  width: 100%;
  border-bottom: 1px solid var(--grey-1);

  nav {
    display: flex;
    width: 80%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    margin: auto;
  }
  h1 {
    color: var(--pink-primary);
    font-size: 1.5rem;
  }
  header {
    width: 100%;
    height: 130px;
    background-color: var(--grey-4);
    border-bottom: 1px solid var(--grey-3);
  }
  .BoxHeader {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: auto;
    justify-content: center;
    gap: 10px;
  }

  h2 {
    color: var(--grey-0);
    font-size: 1.125rem;
    font-weight: 700;
  }
  h3 {
    color: var(--grey-1);
    font-size: var(--headline-12);
  }
  @media (min-width: 800px) {
    .BoxHeader {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
  main {
    width: 100%;
    height: 100vh;
    background-color: var(--grey-4);
    display: flex;
  }
  .BoxMainContent {
    margin: auto;
    width: 80%;
    height: 90%;
    display: flex;
    flex-direction: column;
    gap: 23px;
  }
  .BoxTitleBtnModal {
    display: flex;
    justify-content: space-between;
  }
  .BoxTitleBtnModal > button {
    height: 32px;
    width: 32.485294342041016px;

    background: var(--grey-3);
    border-radius: 4px;
    border: none;
    color: #ffffff;
    font-size: 20px;
  }
  .BoxListBackground {
    background-color: var(--grey-3);
    border-radius: 4px;
    height: fit-content;
    padding: 22px 19px 22px 19px;
  }
  .BoxListTechs {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .BoxListTechs li {
    padding: 12.18px;
    background: var(--grey-4);
    border-radius: 4.06066px;
  }
  .BoxListTechs li:hover {
    background: var(--grey-2);
  }
`;
