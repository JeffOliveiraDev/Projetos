import { useEffect } from "react";
import { StyledList } from "./styles";
import { api } from "../../services/api";
import { useState } from "react";
import { Product } from "../Card";
import React from "react";

export function ProductsBox({ setCurrentSale, currentSale, inputData }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        const response = await api.get("products");

        const { data } = response;
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, []);

  return (
    <>
      {loading ? (
        <h1> Carregando...</h1>
      ) : (
        <StyledList>
          <Product
            products={products}
            setCurrentSale={setCurrentSale}
            currentSale={currentSale}
            inputData={inputData}
          />
        </StyledList>
      )}
    </>
  );
}
