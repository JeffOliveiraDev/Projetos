import { createGlobalStyle } from "styled-components";

export const StyledButtons = createGlobalStyle`

    .buttonGreenWhite{

        padding: 0px 20px;
        gap: 10px;

        width: 107px;
        height: 40px;

        background: var(--green-primary);

        border: 2px solid var(--green-primary);
        border-radius: 8px;
        color: #ffffff;
        font-weight: 500;
        font-size: var(--heading-4-14);
        display: flex;
        align-items: center;
        justify-content: center
        
    }
    .buttonGreenWhite:hover{
        background: #93D7AF;
        border: 2px solid #93D7AF;
        color: #FFFFFF;
    }
    .BtnRemoveAll {
        width: 360px;
        margin: auto;
        height: 60px;

        background: var(--grey-20);

        border: 2px solid var(--grey-20);
        border-radius: 8px;
        font-weight: 600;
        font-size: var(--headline-16);

        color: var(--grey-50);
  }
  .BtnRemoveAll:hover{
        background: #828282;
        border: 2px solid #828282;
        color: #E0E0E0;

  }

`;
