import { InputHTMLAttributes, useContext } from "react";
import { useForm } from "react-hook-form";
import { StyledForm } from "./style";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";
import { SubmitHandler } from "react-hook-form/dist/types";

interface iDataForm {
  email: string;
  password: string;
}

const FormLogin = () => {
  const { register, handleSubmit } = useForm<iDataForm>();
  const { loginApiData } = useContext(UserContext);

  const submit: SubmitHandler<iDataForm> = (data) => {
    loginApiData(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <h2>Login</h2>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="FieldPosition">
          <TextField
            required
            id="outlined-required"
            label="Email"
            defaultValue="Seu email"
            {...register("email")}
          />
          <TextField
            id="filled-password-input"
            label="Password"
            type="password"
            defaultValue="password"
            autoComplete="current-password"
            {...register("password")}
          />
        </div>
      </Box>
      <button className="BtnGreenWhite" type="submit">
        Logar
      </button>
      <h4>Crie sua conta para saborear muitas delícias e matar sua fome!</h4>
      <Link to="/register">
        <button className="BtnLightGrey">Cadastrar</button>
      </Link>
    </StyledForm>
  );
};

export default FormLogin;
