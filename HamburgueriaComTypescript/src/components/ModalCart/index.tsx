import React, { useContext, useState } from "react";
import { boolean } from "yup";
import { RenderContext } from "../../providers/RenderContext";
import { StyledModalCart } from "./style";
import { FaTrashAlt } from "react-icons/fa";

interface iArray {
  // category: string;
  // id: number;
  // img: string;
  // name: string;
  // price: number;
  // lenght: number;
}

export const ModalCart = () => {
  const { modalOpenClose, setModal, currentSale, setCurrentSale } =
    useContext(RenderContext);

  console.log(currentSale);

  const CloseModal = () => {
    setModal(!modalOpenClose);
  };
  let novoArray: any = currentSale;
  console.log(novoArray);
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
                  {currentSale?.map((item) => {
                    return (
                      <div className="BoxItens">
                        <div className="ItenBox">
                          <img src={item.img} alt="" />
                          <div>
                            <h2>{item.name}</h2>
                            <div>
                              <button>+</button>
                              <span>0</span>
                              <button>-</button>
                            </div>
                          </div>
                          <div className="BtnDelete">
                            <button>
                              <FaTrashAlt />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
