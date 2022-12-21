import styled from "styled-components";

export const StyledLogin = styled.div`
  background-color: #000000;
  width: 100vw;
  height: 100vh;
  display: flex;

  .BoxTitleAndLogin {
    display: flex;
    flex-direction: column;
    height: 80%;

    width: 80%;

    align-items: center;
    margin: auto;
  }

  h1 {
    color: var(--pink-primary);
    font-size: 1.5rem;
  }
  .BoxLogin {
    background-color: var(--grey-3);
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 34px 18px 34px 18px;
    height: fit-content;
    margin: auto;
    align-items: center;
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;
  }
  @media (min-width: 800px) {
    .BoxLogin {
      width: 370px;
      height: fit-content;
    }
  }
  .BoxLogin button {
    margin-top: 10px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
  h2,
  label {
    color: var(--grey-0);
  }

  .BoxLogin h3 {
    font-size: var(--headline-12);
    color: var(--grey-1);
  }
  .BoxLogin > form {
    margin-top: 22px;
  }
  .BoxLogin button {
    margin-top: 26px;
  }
  .BoxLogin a {
    width: 100%;
  }
`;
