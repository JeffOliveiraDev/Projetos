import { useState } from "react";
import { StyledCards } from "./styles";
import { StyledButtons } from "../../styles/buttons";
import { ToastContainer, toast } from "react-toastify";

export function Product({ products, setCurrentSale, currentSale, inputData }) {
  function FindAndAddCurrentSale(product) {
    const idsProducts = products.map((element) => {
      return (element = element.id);
    });
    const idsCurrentSale = currentSale.map((element) => {
      return (element = element.id);
    });
    const productId = product.id;

    const findProduct = idsCurrentSale.find((ele) => ele === productId);

    if (findProduct === undefined) {
      setCurrentSale([...currentSale, product]);
      toast.success("Produto adicionado com sucesso!");
    } else {
      toast.error("Esse produto já foi adicionado!");
    }
  }

  const productsFiltered = products.filter((product) => {
    return product.name === inputData;
  });

  let productsRender = [];

  if (productsFiltered.length === 0) {
    productsRender = products;
  } else {
    productsRender = productsFiltered;
    toast.success("Produto encontrado!");
  }

  return (
    <>
      {productsRender.map((product) => {
        return (
          <StyledCards key={product.id}>
            <img src={product.img} alt={product.name} />
            <div className="ProductInfosBtn">
              <h2>{product.name}</h2>
              <h4>{product.category}</h4>
              <h3>R$ {product.price}</h3>
              <button
                className="buttonGreenWhite"
                onClick={() => FindAndAddCurrentSale(product)}
              >
                Adicionar
              </button>
            </div>
          </StyledCards>
        );
      })}
    </>
  );
}
