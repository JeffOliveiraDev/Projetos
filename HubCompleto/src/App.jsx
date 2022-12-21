import { StyledApp } from "./styles/App";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { StyledReset } from "./styles/reset";
import { StyledGlobal } from "./styles/global";
import { useState } from "react";
import { RoutesMain as Routes } from "./routes";
import { UserProvider } from "./components/Providers/UserContext";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <StyledReset />
      <StyledGlobal />
      <Routes />
    </div>
  );
}

export default App;
