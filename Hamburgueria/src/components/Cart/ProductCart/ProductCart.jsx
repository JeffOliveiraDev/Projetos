import { StyledCartList } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

export function RenderProductCart({ setCurrentSale, currentSale }) {
  function RemoveProduct(id) {
    setCurrentSale(
      currentSale.filter((element) => {
        return element.id != id;
      })
    );
  }

  return (
    <StyledCartList>
      {currentSale.map((product) => {
        return (
          <li key={product.id}>
            <img src={product.img} alt="" />
            <div>
              <h4>{product.name}</h4>
              <h5>{product.category}</h5>
            </div>
            <div className="BtnRemove">
              <button
                onClick={() => [
                  RemoveProduct(product.id),
                  toast.success("Produto removido com sucesso!"),
                ]}
              >
                Remover
              </button>
            </div>
          </li>
        );
      })}
    </StyledCartList>
  );
}
