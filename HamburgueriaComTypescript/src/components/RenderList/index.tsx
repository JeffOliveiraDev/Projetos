import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../api/api";
import { RenderContext } from "../../providers/RenderContext";
import { StyledCard } from "./style";
import { ModalCart } from "../ModalCart";

interface iToken {
  token: string;
}

interface iSearch {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
}

interface iSales {
  currentSale: iSearch[] | any | null;
}

export const RenderList = () => {
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("@TOKEN");

  const { setProducts, products, searchInp, setCurrentSale, currentSale } =
    useContext(RenderContext);

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        const response = await api.get("/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { data } = response;
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, [setProducts, token]);

  let productsRender = [];

  if (searchInp === undefined || searchInp.length === 0) {
    productsRender = products;
  } else {
    productsRender = searchInp;
  }

  const addToCart = (item: any) => {
    const findProduct = currentSale.find((ele: any) => ele.id === item.id);

    if (findProduct === undefined) {
      setCurrentSale([...currentSale, item]);

      toast.success("Produto adicionado com sucesso!");
      setTimeout(() => console.log(currentSale), 100);
    } else {
      toast.error("Esse produto já foi adicionado!");
    }
  };

  return (
    <>
      {loading ? (
        <h1> Carregando...</h1>
      ) : (
        <>
          {productsRender?.map((product: any) => {
            return (
              <StyledCard key={product.id}>
                <img src={product.img} alt={product.name} />
                <div className="ProductInfos">
                  <h2>{product.name}</h2>
                  <h4>{product.category}</h4>
                  <h3>R$ {product.price}</h3>
                  <button
                    onClick={() => addToCart(product)}
                    className="buttonGreenWhite"
                  >
                    Adicionar
                  </button>
                </div>
              </StyledCard>
            );
          })}
        </>
      )}
    </>
  );
};
