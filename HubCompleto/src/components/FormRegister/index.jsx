import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ButtonRegister } from "../Button";
import { toast } from "react-toastify";
import { api } from "../../api/api";
import { RegisterContext } from "../Providers/RegisterContext";

export function FormDataRegister() {
  const { register, handleSubmit } = useForm();

  const { setNewUser, toastFunc, newUser, RegisterApi } =
    useContext(RegisterContext);

  const onSubmit = (data) => {
    RegisterApi(data);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="">Nome</label>
      <input
        type="text"
        placeholder="Digite aqui seu nome"
        required
        {...register("nome")}
      />

      <label htmlFor="">Email</label>
      <input
        type="text"
        placeholder="Digite aqui seu email"
        required
        {...register("email")}
      />

      <label htmlFor="">Senha</label>
      <input
        type="text"
        placeholder="Digite aqui sua senha"
        required
        {...register("senha")}
      />
      <label htmlFor="">Confirmar Senha</label>
      <input
        type="text"
        placeholder="Confirme sua senha"
        required
        {...register("senha")}
      />

      <label htmlFor="">Bio</label>
      <input type="text" placeholder="Fale sobre você" {...register("bio")} />
      <label htmlFor="">Contato</label>
      <input
        type="text"
        placeholder="Opção de contato"
        {...register("contato")}
      />
      <label htmlFor="">Selecionar módulo</label>
      <select name="" id="" {...register("modulo")}>
        <option value="Primeiro Módulo">Primeiro Módulo</option>
        <option value="Segundo Módulo">Segundo Módulo</option>
        <option value="Terceiro Módulo">Terceiro Módulo</option>
        <option value="Quarto Módulo">Quarto Módulo</option>
      </select>

      <ButtonRegister />
    </form>
  );
}
