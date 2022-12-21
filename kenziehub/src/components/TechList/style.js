import styled from "styled-components";

export const StyledTechList = styled.div`
  display: flex;
  flex-direction: column;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12.18px;
    background: var(--grey-4);
    border-radius: 4.06066px;
  }
  li:hover {
    background: var(--grey-2);
  }
  .LvlAndBtnDelete {
    display: flex;
  }
  .LvlAndBtnDelete h3 {
    margin-right: 50px;
  }

  .LvlAndBtnDelete button {
    width: 15.17px;
    height: 13;
    background: none;
    border: none;
    color: white;
  }
`;
