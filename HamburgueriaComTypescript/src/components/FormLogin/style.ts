import styled from "styled-components";

export const StyledForm = styled.form`
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
`;
