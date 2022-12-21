import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../api/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../components/Providers/UserContext";

export function FormData() {
  const { register, handleSubmit } = useForm();
  const [resp, setResponse] = useState();

  const { user, setUser } = useContext(UserContext);

  console.log(user);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    setUser(data);
    LoginApi(data);
    console.log(user);
  };

  async function LoginApi(dataUser) {
    try {
      const response = await api.post("/sessions", {
        email: dataUser.email,
        password: dataUser.senha,
      });
      const { data } = response;
      const { user } = response.data;
      toastFunc(response);
      setResponse(data);
      setUser(user);
    } catch (error) {
      console.log(error);
      if (error.response.status !== 200) {
        toast.error("Algo deu errado, tente novamente");
      }
    } finally {
    }
  }

  function toastFunc(resp) {
    if (resp.status === 200) {
      toast.success("Bem vindo!");
      localStorage.setItem("@TOKEN", resp.data.token);
      localStorage.setItem("@USERID", resp.data.user.id);

      navigate("/dashboard");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="">Email</label>
      <input type="text" placeholder="email" required {...register("email")} />
      <label htmlFor="">Senha</label>
      <input type="text" placeholder="senha" required {...register("senha")} />
      <button type="submit" className="BtnPinkwhite">
        Entrar
      </button>
    </form>
  );
}
