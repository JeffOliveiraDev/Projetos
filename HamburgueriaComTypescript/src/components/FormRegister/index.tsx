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
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export interface iDataRegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const formSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório!"),
  email: yup.string().required("Email obrigatório!").email("Email inválido"),
  password: yup.string().required("Senha obrigatória!"),
  confirmPassword: yup.string().required("Confirmação de senha obrigatória!"),
});

const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataRegisterForm>({
    resolver: yupResolver(formSchema),
  });
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
          {errors.name?.message}
          <TextField
            id="filled-password-input"
            label="Email"
            type="email"
            defaultValue="Email"
            {...register("email")}
          />
          {errors.email?.message}
          <TextField
            className="FieldPassword"
            id="filled-password-input"
            label="Password"
            type="password"
            defaultValue="password"
            autoComplete="current-password"
            {...register("password")}
          />
          {errors.password?.message}
          <TextField
            className="FieldPassword"
            id="filled-password-input"
            label="Password"
            type="password"
            defaultValue="password"
            autoComplete="current-password"
            {...register("confirmPassword")}
          />
          <span>{errors.confirmPassword?.message}</span>
        </div>
      </Box>
      <button className="BtnLightGrey">Cadastrar</button>
    </StyledFormRegister>
  );
};

export default FormRegister;
