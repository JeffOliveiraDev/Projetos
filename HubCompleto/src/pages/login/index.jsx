import React, { useEffect } from "react";
import { StyledLogin } from "./style";
import { StyledButtons } from "../../styles/buttons";
import { FormData } from "../../components/FormLogin";
import { api } from "../../api/api";
import { Link } from "react-router-dom";

export function LoginPage() {
  return (
    <StyledLogin>
      <StyledButtons />
      <div className="BoxTitleAndLogin">
        <h1>Kenzie Hub</h1>

        <div className="BoxLogin">
          <h2>Login </h2>

          <FormData />

          <h3>Ainda não possui uma conta?</h3>

          <Link to="/register">
            <button className="BtnGreyWhite">Cadastre-se</button>
          </Link>
        </div>
      </div>
    </StyledLogin>
  );
}
