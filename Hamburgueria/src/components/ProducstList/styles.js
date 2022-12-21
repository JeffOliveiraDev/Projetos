import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  gap: 20px;
  width: 100vw;
  overflow: scroll;
  height: fit-content;
  margin-top: 20px;
  @media (min-width: 800px) {
    flex-wrap: wrap;
    overflow: hidden;
  }
`;
