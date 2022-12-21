import React, { useContext, useState } from "react";
import { StyledDashboardPage } from "./style";
import cart from "../../img/cart.svg";
import logout from "../../img/exit.svg";
import search from "../../img/search.svg";
import { RenderList } from "../../components/RenderList";
import { Link } from "react-router-dom";
import { RenderContext } from "../../providers/RenderContext";
import { toast } from "react-toastify";
import { ModalCart } from "../../components/ModalCart";
import { StyledButtons } from "../../styles/buttons";
// import { ModalCart } from "../../components/ModalCart";

interface iSearch {
  searchInp: any;
}
export function DashboardPage() {
  const [searchInput, setSearchInput] = useState<iSearch[] | any>("");

  const { setSearch, products, setModal, modalOpenClose, currentSale } =
    useContext(RenderContext);

  function submit(event: any) {
    event.preventDefault();

    findProduct(searchInput);
  }

  function ClearLocalStorage() {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USER");
  }

  const findProduct = (search: any) => {
    const productsFiltered = products?.filter((product: { name: any }) => {
      return product.name === search;
    });
    console.log(productsFiltered);
    if (productsFiltered.lenght === 0 || productsFiltered === undefined) {
      console.log(productsFiltered);
      toast.error("Não encontrado");
    } else {
      setSearch(productsFiltered);
    }
  };

  const OpenModal = () => {
    setModal(!modalOpenClose);
  };

  return (
    <StyledDashboardPage>
      <ModalCart />
      <header>
        <div className="InsideHeader">
          <div className="TitleHeader">
            <h1>
              Burguer <span> Kenzie </span>
            </h1>
          </div>
          <div className="BoxIconsHeader">
            <div>
              <form className="InputBtnSearch" onSubmit={submit}>
                <input
                  type="text"
                  value={searchInput}
                  onChange={(event) => setSearchInput(event.target.value)}
                />
                <button>
                  <img src={search} alt="" />
                </button>
              </form>
            </div>
            <div className="BtnCartItems">
              <button className="BtnCart" onClick={() => OpenModal()}>
                <img src={cart} alt="" />
              </button>
              <span>{currentSale.length}</span>
            </div>
            <Link to="/">
              <button className="BtnLogout" onClick={() => ClearLocalStorage()}>
                <img src={logout} alt="" />
              </button>
            </Link>
          </div>
        </div>
      </header>

      <div className="BoxList">
        <ul className="BoxListProducts">
          <RenderList />
        </ul>
      </div>
    </StyledDashboardPage>
  );
}
