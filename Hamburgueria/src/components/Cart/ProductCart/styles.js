import styled from "styled-components";

export const StyledCartList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  li {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    justify-content: space-between;
  }
  img {
    width: 70px;
    height: 70px;
    padding: 10px;
    background: #e0e0e0;
    border-radius: 5px;
  }
  div {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
  h4 {
    font-weight: 700;
    font-size: var(--heading-4-14);
    color: var(--grey-100);
  }
  h5 {
    font-weight: 400;
    font-size: var(--caption-12);
    color: var(--grey-50);
  }
  .BtnRemove {
    display: flex;
    width: 70px;

    height: 100%;
  }
  .BtnRemove button {
    border: none;

    font-weight: 500;
    font-size: var(--caption-12);

    color: #bdbdbd;
    background: none;
  }
`;
