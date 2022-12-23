import styled from "styled-components";

export const StyledModalCart = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(51, 51, 51, 0.5);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  .BoxModal {
    width: 375px;
    height: 212px;
  }
  .HeaderBox {
    width: 100%;
    height: 54px;

    background: #27ae60;
    border-radius: 5px 5px 0px 0px;
  }
  .HeaderItens {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    margin: auto;

    align-items: center;
  }
  .HeaderItens > button {
    background: none;
    border: none;
    color: #ffffff80;
  }
  .HeaderItens > h2 {
    font-weight: 700;
    font-size: 18px;
    color: #ffffff;
  }
  .BoxItens {
    width: 100%;
    height: fit-content;
    background: #ffffff;
    padding: 20px;
    /* grey-0 */

    border: 1px solid #f5f5f5;
    border-radius: 0px 0px 5px 5px;
  }
  .Itens {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
    margin: auto;
    align-items: center;
    justify-content: center;
    gap: 17px;
  }
  .Itens > h3 {
    font-weight: 700;
    font-size: 18px;

    text-align: center;

    color: #333333;
  }
  .Itens > h4 {
    font-weight: 400;
    font-size: 14px;

    color: #828282;
  }
  .ItenBox {
    margin: auto;
    display: flex;
    gap: 10px;
    height: 100px;
    justify-content: space-between;
  }
  .ItenBox > img {
    width: 82px;
    height: 80px;
    background: #e0e0e0;
    border-radius: 5px;
  }

  .BtnDelete {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
  }
  .BtnDelete button {
    background: none;
    border: none;
    color: #bdbdbd;
  }
  .TotalAndBtnRemove {
    border-top: 2px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .TotalAndBtnRemove h3,
  h4 {
    margin-top: 15px;
    font-size: 14px;
    font-weight: 600;
  }
  .TotalAndBtnRemove h3 {
    color: #333333;
  }
  .TotalAndBtnRemove h4 {
    color: #828282;
  }
  .BtnRemoveAll {
    margin-top: 20px;
    padding: 0px 20px;
    gap: 10px;

    width: 100%;
    height: 60px;

    /* grey-100 */

    background: #e0e0e0;
    /* grey-100 */

    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;

    /* grey-300 */

    color: #828282;
  }
  .BtnRemoveAll:hover {
    background: var(--grey-300);
    color: #ffffff;
    border: none;
  }
  .BoxNameAndCounter {
    width: 170px;
    margin-left: -40px;
    height: 82px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .BoxCounter {
    display: flex;
    width: fit-content;
    align-items: center;
  }
  .BoxCounter button {
    width: 30.44px;
    height: 34px;

    /* Gray 6 */

    background: #f2f2f2;
    border: none;
    color: #eb5757;
    font-weight: 400;
    font-size: 22px;
  }
  .BoxCounter > span {
    display: flex;
    width: 30px;
    height: 34px;
    align-items: center;
    justify-content: center;
    border-bottom: 3px solid #f2f2f2;
    border-top: 3px solid #f2f2f2;
  }
`;

// <div className="BoxCounter">
//                               <button>+</button>
//                               <span>0</span>
//                               <button>-</button>
