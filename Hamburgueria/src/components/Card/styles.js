import styled from "styled-components";

export const StyledCards = styled.li`
  height: 370px;
  background-color: red;
  background: #ffffff;

  border: 2px solid var(--grey-20);
  border-radius: 5px;
  :hover {
    border: 2px solid black;
  }
  img {
    height: 177px;
    width: 250px;
    background-color: var(--grey-0);
  }

  .ProductInfosBtn {
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .ProductInfosBtn h2 {
    margin-top: 14px;
    font-weight: 700;
    font-size: var(--heading-3-18);
  }
  .ProductInfosBtn h4 {
    font-weight: 400;
    font-size: 12px;
    color: var(--grey-50);
  }
  .ProductInfosBtn h3 {
    font-weight: 600;
    font-size: var(--heading-4-14);

    color: var(--green-primary);
  }
`;
