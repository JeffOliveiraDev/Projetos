import { StyledReset } from "./styles/reset";
import { useState } from "react";
import { HeaderRender } from "./components/header/Header";
import { StyledGlobal } from "./styles/global";
import { ProductsBox } from "./components/ProducstList";
import { CartBox } from "./components/Cart";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { StyledBoxListCard } from "./styles/app";

function App() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [inputData, SetInputData] = useState([]);
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

      <HeaderRender inputData={inputData} SetInputData={SetInputData} />
      <StyledBoxListCard>
        <ProductsBox
          setCurrentSale={setCurrentSale}
          currentSale={currentSale}
          inputData={inputData}
        />

        <CartBox setCurrentSale={setCurrentSale} currentSale={currentSale} />
      </StyledBoxListCard>
    </div>
  );
}

export default App;
