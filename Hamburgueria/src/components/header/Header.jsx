import { useState } from "react";
import { StyledHeader } from "./styles";
import { StyledButtons } from "../../styles/buttons";

export function HeaderRender({ inputData, SetInputData }) {
  const [dataInput, SetDataInput] = useState([]);

  function handleClick(event) {
    event.preventDefault();
    SetInputData(dataInput);
  }

  return (
    <StyledHeader>
      <StyledButtons />
      <header>
        <div className="titleHeader">
          <h1>
            Burguer <span>Kenzie</span>
          </h1>
          <form onSubmit={(event) => handleClick(event)}>
            <div className="boxInputButton">
              <input
                type="text"
                value={dataInput}
                placeholder="Digitar Pesquisa"
                onChange={(event) => SetDataInput(event.target.value)}
              />

              <button type="submit" className="buttonGreenWhite">
                Pesquisar
              </button>
            </div>
          </form>
        </div>
      </header>
    </StyledHeader>
  );
}
