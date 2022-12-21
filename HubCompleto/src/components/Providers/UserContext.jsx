import { useState, createContext, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState([]);
  const [resp, setResponse] = useState();

  const navigate = useNavigate();
  function toastFunc(resp) {
    if (resp.status === 200) {
      toast.success("Bem vindo!");
      localStorage.setItem("@TOKEN", resp.data.token);
      localStorage.setItem("@USERID", resp.data.user.id);

      navigate("/dashboard");
    }
  }

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

  return (
    <UserContext.Provider value={{ user, setUser, toastFunc, LoginApi }}>
      {children}
    </UserContext.Provider>
  );
}
