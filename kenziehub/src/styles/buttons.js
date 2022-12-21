import { createGlobalStyle } from "styled-components";

export const StyledButtons = createGlobalStyle`

    .BtnPinkwhite{

    width: 100%;
    height: 38.5px;

    background: var(--pink-primary);
   
    border: 1.2182px solid var(--pink-primary);
    border-radius: 4.06066px;
    color: #ffffff;
    font-weight: 500;
    font-size: 18px;
    }
    .BtnPinkwhiteDisabled{

    width: 100%;
    height: 50px;

    background: #59323F;
   
    border: 1.2182px solid #59323F;
    border-radius: 4.06066px;
    color: #ffffff;
    font-weight: 500;
    font-size: 18px;
    }
    .BtnGreyWhite{

        width: 100%;
        height: 38.5px;
          
        background: var(--grey-1);
    
        border: 1.2182px solid var(--grey-1);
        border-radius: 4px;
        color: var(--grey-0);
        font-weight: 500;
        font-size: 1.125rem;
        
    }
    .BtnDarkGreyWhiteExit{
        width: 90px;
        height: 40px;

        background-color: var(--grey-3);
        border-radius: 4px;
        border-color: var(--grey-3);
        color: #ffffff;
        font-weight: 600;
        font-size: 1rem;
    
    }
    .BtnDarkGreyWhite {
    width: 90px;
    height: 40px;

    background-color: var(--grey-3);
    border-radius: 4px;
    border-color: var(--grey-3);
    color: #ffffff;
    margin-bottom: 20px;
  }
`;
