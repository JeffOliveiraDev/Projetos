import styled from "styled-components";

export const StyledDashboardPage = styled.div`
  width: 100%;
  header {
    width: 100%;
    background-color: var(--grey-0);
  }
  .InsideHeader {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: auto;
    height: 80px;
    align-items: center;
  }

  .TitleHeader span {
    color: #eb5757;
    font-size: 22px;
  }
  .BoxIconsHeader {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .InputBtnSearch {
    display: flex;
    padding: 0px 8px 0px 15px;

    width: 100%;
    height: 50px;

    background: #ffffff;
    /* Gray 1 */

    border: 2px solid #333333;
    border-radius: 8px;
    align-items: center;
  }

  .InputBtnSearch input {
    width: 90%;
    height: 60%;
    border: none;
  }
  .InputBtnSearch button {
    display: flex;
    padding: 0px 20px;
    gap: 10px;

    width: 53px;
    height: 40px;

    background: #27ae60;
    border: 2px solid #27ae60;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
  }
  .InputBtnSearch img {
    color: #ffffff;
  }
  .BtnCart {
    border: none;
    position: relative;
  }
  .BtnLogout {
    border: none;
  }
  .BtnCartItems {
    display: flex;
  }
  .BtnCartItems span {
    display: flex;
    width: 20px;
    height: 24px;
    left: 335px;
    top: 15px;

    /* Green 2 */

    background: #27ae60;
    border-radius: 7px;
    align-items: center;
    justify-content: center;
    color: #ffffff;
  }
  .BoxListProducts {
    width: 90%;
    margin-top: 24px;
    height: fit-content;
    margin-bottom: 30px;
    gap: 30px;
    display: flex;

    overflow-y: hidden;
    overflow-x: scroll;
  }
  .BoxList {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  @media (min-width: 900px) {
    .BoxListProducts {
      display: flex;
      justify-content: flex-start;
      width: 80%;

      flex-wrap: wrap;
      margin-left: 0%;
      overflow-y: hidden;
      overflow-x: hidden;
    }
  }
`;
