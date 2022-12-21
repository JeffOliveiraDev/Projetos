import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { StyledReset } from "./styles/reset";
import { StyledGlobal } from "./styles/global";
import { StyledButtons } from "./styles/buttons";
import { RoutesMain as Routes } from "./routes";
import { LoginPage } from "./pages/login/login";

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
      <StyledButtons />
      <Routes />
    </div>
  );
}

export default App;
