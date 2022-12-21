import React from "react";
import { StyledRegister } from "./style";
import { StyledButtons } from "../../styles/buttons";
import { FormDataRegister } from "../../components/FormRegister";
import { Link } from "react-router-dom";

export function RegisterPage() {
  return (
    <StyledRegister>
      <StyledButtons />
      <div className="BoxTitleAndLogin">
        <div className="BoxTitleBtn">
          <h1>Kenzie Hub</h1>
          <Link to="/">
            <button className="BtnDarkGreyWhite">Voltar</button>
          </Link>
        </div>
        <div className="BoxLogin">
          <h2>Crie sua Conta</h2>
          <h4>Rápido e grátis, vamos nessa</h4>

          <FormDataRegister />
        </div>
      </div>
    </StyledRegister>
  );
}
