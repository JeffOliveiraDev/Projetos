import styled from "styled-components";

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  height: 100%;
  margin: auto;
  justify-content: center;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    color: var(--grey-300);
    line-height: 22px;
  }
  b {
    color: black;
  }
  h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;

    color: var(--gray-600);
  }
  h4 {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    text-align: center;

    color: var(--grey-50);
  }

  .BoxBalls {
    display: none;
  }
  @media (min-width: 1000px) {
    .BoxTitleAds {
      display: flex;
      flex-direction: column;
      margin-left: 50px;
    }
    .BoxBalls {
      display: flex;

      margin-top: 30px;
    }
    .BoxBagAds {
      width: 377px;
    }
  }

  .BoxTitleAds span {
    color: #eb5757;
  }
  .BoxBagAds {
    display: flex;
    height: 95px;
    padding: 20px;

    background: #ffffff;

    border: 1px solid var(--grey-100);
    box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    gap: 10px;
    margin-top: 22px;
  }

  .Bag {
    display: flex;

    width: 60px;
    height: 60px;

    background: rgba(39, 174, 96, 0.1);
    border-radius: 5px;
    justify-content: center;
    align-items: center;
  }
  .Bag img {
    height: 20px;
    width: 18px;
  }

  .BoxForm {
    margin-top: 20px;
    background: #ffffff;

    border: 2px solid var(--grey-0);
    box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    padding: 20px;
  }
  @media (min-width: 1000px) {
    .BoxForm {
      max-width: 900px;
    }
  }
`;
