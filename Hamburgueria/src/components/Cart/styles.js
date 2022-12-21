import styled from "styled-components";

export const StyledCart = styled.div`
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 20px;

  background-color: #f5f5f5;
  border-radius: 0px 0px 5px 5px;

  h2 {
    width: 100%;
    height: 65px;
    background: #27ae60;
    border-radius: 5px 5px 0px 0px;
    padding: 20px 10px 20px 10px;
    color: #ffffff;
    font-size: var(--heading-3-18);
    font-weight: 700;
  }
  .boxCartProducts {
    padding: 20px 10px 20px 10px;
    height: 300px;
    margin: 0px 20px;
    border-bottom: 2px solid #e0e0e0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: scroll;
  }
  .TotalCartValue {
    padding: 20px 10px 20px 10px;
    display: flex;
    justify-content: space-between;
    margin: 0px 20px;
  }
  .TotalCartValue h3 {
    font-weight: 600;
    font-size: var(--body-14);
    line-height: 24px;

    color: var(--grey-100);
  }
  .TotalCartValue h4 {
    font-weight: 600;
    font-size: var(--body-14);

    color: var(--grey-50);
  }
`;
