import styled from "styled-components";

export const StyledDivModal = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(18, 18, 20, 0.5);
  .BoxModal {
    width: 70%;
    height: fit-content;
    margin: auto;
    padding: 0px 0px 26px 0px;
    background: #212529;
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;
  }
  @media (min-width: 580px) {
    .BoxModal {
      width: 369px;
    }
  }
  .BoxTitleBtnClose {
    display: flex;
    justify-content: space-between;
    background: #343b41;
    width: 100%;
    padding: 10px 16px 10px 16px;
    border-radius: 3.20867px 3.20867px 0px 0px;
  }
  .BoxTitleBtnClose h1 {
    color: var(--grey-0);
    font-weight: 700;
    font-size: 1rem;
  }
  .BoxTitleBtnClose button {
    color: #868e96;
    background: none;
    border: none;
    font-size: 16px;
  }
  form {
    display: flex;
    flex-direction: column;
    padding: 10px 16px 10px 16px;
    gap: 17px;
    width: 100%;
  }
  input {
    width: 100%;
    height: 39px;
    padding: 0px 13px 0px 13px;
    background-color: var(--grey-2);
    border: 0.9772px solid var(--grey-0);
    border-radius: 3.20867px;
    color: var(--grey-0);
  }
  select {
    width: 100%;
    height: 39px;
    padding: 0px 13px 0px 13px;
    background-color: var(--grey-2);
    border: 0.9772px solid var(--grey-0);
    border-radius: 3.20867px;
    color: var(--grey-0);
  }
  h2,
  label {
    color: var(--grey-0);
    font-weight: 400;
    font-size: var(--headline-12);
  }
  form > button {
    font-weight: 500;
  }
`;
