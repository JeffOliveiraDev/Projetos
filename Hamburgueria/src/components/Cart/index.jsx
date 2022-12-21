import { StyledCart } from "./styles";
import { RenderProductCart } from "./ProductCart/ProductCart";
import { useState } from "react";
import { StyledButtons } from "../../styles/buttons";
import { ToastContainer, toast } from "react-toastify";

export function CartBox({ setCurrentSale, currentSale }) {
  function CalculateTotalValue() {
    const prices = currentSale.map((product) => {
      return product.price;
    });
    let totalValue = 0;
    if (prices.length != 0) {
      totalValue = prices.reduce((acc, valAtual) => {
        return (acc = acc + valAtual);
      });
    }

    return totalValue;
  }
  return (
    <StyledCart>
      <h2>Carrinho de Compras</h2>
      <div className="boxCartProducts">
        <RenderProductCart
          setCurrentSale={setCurrentSale}
          currentSale={currentSale}
        />
      </div>
      <div className="TotalCartValue">
        <h3>Total</h3>
        <h4>
          R$ <CalculateTotalValue />
        </h4>
      </div>
      <button
        className="BtnRemoveAll"
        onClick={() => [
          setCurrentSale([]),
          toast.success("Produtos removidos com sucesso!"),
        ]}
      >
        Remover todos
      </button>
    </StyledCart>
  );
}
