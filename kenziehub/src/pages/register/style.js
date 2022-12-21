import styled from "styled-components";

export const StyledRegister = styled.div`
  background-color: var(--grey-4);
  width: 100%;
  height: 100%;
  display: flex;

  .BoxTitleAndLogin {
    display: flex;
    flex-direction: column;
    height: fit-content;
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
  .BoxLogin button {
    margin-top: 10px;
  }
  @media (min-width: 800px) {
    .BoxLogin {
      width: 370px;
      height: fit-content;
      margin-bottom: 40px;
    }
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
  .BoxTitleBtn {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 40px;
  }
  @media (min-width: 800px) {
    .BoxTitleBtn {
      width: 370px;
    }
  }

  .BoxLogin h4 {
    font-weight: 400;
    color: var(--grey-1);
    margin-top: 15px;
  }
  select {
    width: 100%;
    height: 38.38px;

    /* grey-2 */

    background: var(--grey-2);
    /* grey-2 */

    border: 0.973988px solid var(--grey-2);
    border-radius: 3.19812px;
    color: var(--grey-1);
  }
`;
