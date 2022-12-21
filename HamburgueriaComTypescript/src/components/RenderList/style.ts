import styled from "styled-components";

export const StyledCard = styled.li`
  width: 300px;
  height: 370px;
  background: #ffffff;

  border: 2px solid var(--grey-100);
  border-radius: 5px;
  :hover {
    border: 2px solid var(--Color-primary);
    .buttonGreenWhite {
      background: var(--Color-primary);
      border: 2px solid var(--Color-primary);
    }
  }
  img {
    width: 250px;
    height: 177px;
    background-color: var(--grey-0);
    border-radius: 5px;
  }
  @media (min-width: 900px) {
    img {
      width: 100%;
      height: 177px;
      background-color: var(--grey-0);
      border-radius: 5px;
    }
  }

  .ProductInfos {
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .ProductInfos h2 {
    margin-top: 14px;
    font-weight: 700;
    font-size: 18px;
    color: #333333;
  }
  .ProductInfos h4 {
    font-weight: 400;
    font-size: 12px;
    color: #828282;
  }
  .ProductInfos h3 {
    font-weight: 600;
    font-size: 14px;

    color: var(--Color-primary);
  }
  .buttonGreenWhite {
    padding: 0px 20px;
    gap: 10px;

    width: 106px;
    height: 40px;

    background: #bdbdbd;

    border: 2px solid #bdbdbd;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
  }
`;
