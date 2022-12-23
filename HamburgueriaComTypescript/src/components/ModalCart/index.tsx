import React, { useContext, useState } from "react";
import { boolean } from "yup";
import { RenderContext } from "../../providers/RenderContext";
import { StyledModalCart } from "./style";
import { FaTrashAlt } from "react-icons/fa";

export const ModalCart = () => {
  const { modalOpenClose, setModal, currentSale, setCurrentSale } =
    useContext(RenderContext);
  const [counter, setCounter] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  const Counter = (count: string) => {
    if (count === "sum") {
      setCounter(counter + 1);
    }
    if (count === "sub") {
      setCounter(counter - 1);
    }
  };

  const prices = currentSale.map((prices) => {
    return prices.price;
  });

  let totalSales = 0;

  if (prices.length > 0) {
    totalSales = prices.reduce((number, prevNumber) => {
      return (number = prevNumber + number);
    });
  }

  const CloseModal = () => {
    setModal(!modalOpenClose);
  };

  const RemoveItem = (id: number) => {
    setCurrentSale(
      currentSale.filter((sale) => {
        return sale.id !== id;
      })
    );
  };

  const RemoveAllItens = () => {
    setCurrentSale([]);
  };

  return (
    <>
      {modalOpenClose ? (
        <StyledModalCart>
          <div className="BoxModal">
            <div className="HeaderBox">
              <div className="HeaderItens">
                <h2>Carrinho de compras</h2>
                <button onClick={() => CloseModal()}>X</button>
              </div>
            </div>
            <>
              {currentSale.length > 0 ? (
                <>
                  <div className="BoxItens">
                    {currentSale?.map((item) => {
                      return (
                        <div className="ItenBox" key={item.id}>
                          <img src={item.img} alt="" />
                          <div className="BoxNameAndCounter">
                            <h2>{item.name}</h2>
                            <div className="BoxCounter">
                              <button onClick={() => Counter("sum")}>+</button>
                              <span>{counter}</span>
                              <button onClick={() => Counter("sub")}>-</button>
                            </div>
                          </div>
                          <div className="BtnDelete">
                            <button onClick={() => RemoveItem(item.id)}>
                              <FaTrashAlt />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                    <div className="TotalAndBtnRemove">
                      <h3>Total</h3> <h4>R$ {totalSales}</h4>
                    </div>
                    <button
                      className="BtnRemoveAll"
                      onClick={() => RemoveAllItens()}
                    >
                      Remover todos
                    </button>
                  </div>
                </>
              ) : (
                <div className="BoxItens">
                  <div className="Itens">
                    <h3>Sua sacola está vazia</h3>
                    <h4>Adicione itens</h4>
                  </div>
                </div>
              )}
            </>
            {/* {showNoProducts ? (
              <div>
                <h3>Sua sacola está vazia</h3>
                <h4>Adicione itens</h4>
              </div>
            ) : (
              "teste"
            )} */}
            {/* <div className="BoxItens">
              <div className="Itens">
                <h3>Sua sacola está vazia</h3>
                <h4>Adicione itens</h4>
              </div>
            </div> */}
          </div>
        </StyledModalCart>
      ) : (
        console.log("modal fechado")
      )}
    </>
  );
};
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
