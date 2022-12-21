import { InputHTMLAttributes, useContext } from "react";
import { useForm } from "react-hook-form";
import { StyledFormRegister } from "./style";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { RegisterContext } from "../../providers/RegisterContext";
import { SubmitHandler } from "react-hook-form/dist/types";
import { toast } from "react-toastify";

export interface iDataRegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const FormRegister = () => {
  const { register, handleSubmit } = useForm<iDataRegisterForm>();
  const { registerApi } = useContext(RegisterContext);

  const submit: SubmitHandler<iDataRegisterForm> = (data) => {
    if (data.password === data.confirmPassword) {
      registerApi(data);
    } else {
      toast.error("As senhas estão diferentes!");
    }
  };

  return (
    <StyledFormRegister onSubmit={handleSubmit(submit)}>
      <div className="TitleReturnLogin">
        <h2>Cadastrar</h2>
        <Link to="/">
          <h5>Retornar para o login</h5>
        </Link>
      </div>

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
            label="Nome"
            defaultValue="Seu nome"
            {...register("name")}
          />
          <TextField
            id="filled-password-input"
            label="Email"
            type="email"
            defaultValue="Email"
            {...register("email")}
          />
          <TextField
            className="FieldPassword"
            id="filled-password-input"
            label="Password"
            type="password"
            defaultValue="password"
            autoComplete="current-password"
            {...register("password")}
          />
          <TextField
            className="FieldPassword"
            id="filled-password-input"
            label="Password"
            type="password"
            defaultValue="password"
            autoComplete="current-password"
            {...register("confirmPassword")}
          />
        </div>
      </Box>
      <button className="BtnLightGrey">Cadastrar</button>
    </StyledFormRegister>
  );
};

export default FormRegister;
