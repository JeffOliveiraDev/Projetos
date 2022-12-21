import styled from "styled-components";

export const StyledFormRegister = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 1000px) {
    width: fit-content;
  }

  .FieldPosition {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
  }
  .FieldPassword {
    background: var(--grey-0);

    border: 2px solid var(--grey-0);
  }
  .FieldPassword label {
    color: var(--grey-50);
  }
  button {
    width: 100%;
  }
  .TitleReturnLogin {
    display: flex;
    justify-content: space-between;
  }
  .TitleReturnLogin h5 {
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;

    color: var(--grey-300);
    text-decoration: underline;
  }
`;
