import React from "react";
import { StyledLogin } from "./style";
import sacola from "../../img/shopping-bag.svg";
import bolinhas from "../../img/bolinhas.svg";
import FormLogin from "../../components/FormLogin";

export const LoginPage = () => {
  return (
    <StyledLogin>
      <div className="BoxTitleAds">
        <h1>
          Burguer <span> Kenzie </span>
        </h1>
        <div className="BoxBagAds">
          <div className="Bag">
            <img src={sacola} alt="" />
          </div>
          <p>
            A vida é como um sanduíche, é preciso recheá-la com os{" "}
            <b>melhores</b> ingredientes.
          </p>
        </div>
        <div className="BoxBalls">
          <img src={bolinhas} alt="" />
        </div>
      </div>
      <div className="BoxForm">
        <FormLogin />
      </div>
    </StyledLogin>
  );
};
