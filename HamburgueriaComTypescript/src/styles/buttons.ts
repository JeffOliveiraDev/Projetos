import { createGlobalStyle } from "styled-components";

export const StyledButtons = createGlobalStyle`

    .BtnGreenWhite{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px 20px;
        gap: 10px;

    
        width: 130px;
        height: 60px;
        left: 20px;
        top: 20px;
  
        background: var(--Color-primary);

        border: 2px solid var(--Color-primary);
        border-radius: 8px;
        font-weight: 600;
        font-size: 1rem;
        line-height: 19px;

        color: #FFFFFF;
    }
    .BtnGreenWhite:hover{

        background: var(--Color-primary-50);
        border: 2px solid var(--Color-primary-50);
    }
    .BtnGreenWhiteSmall{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px 20px;
        gap: 10px;

        width: 130px;
        height: 40px;
        left: 20px;
        top: 20px;

        background: var(--Color-primary);

        border: 2px solid var(--Color-primary);
        border-radius: 8px;

        font-weight: 600;
        font-size: 1rem;
        line-height: 19px;

        color: #FFFFFF;
    }
    .BtnGreenWhiteSmall:hover{

        background: var(--Color-primary-50);
        border: 2px solid var(--Color-primary-50);
    }
    .BtnLightGrey{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px 20px;
        gap: 10px;

        width: 130px;
        height: 60px;
        left: 20px;
        top: 20px;

        background: var(--grey-100);

        border: 2px solid var(--grey-100);
        border-radius: 8px;

        font-weight: 600;
        font-size: 1rem;

        color: var(--grey-300);

    }
    .BtnLightGrey:hover{
        background: var(--grey-300);
        border: 2px solid var(--grey-300);
        color: var(--grey-100);

    }
    .BtnLightGreySmall{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px 20px;
        gap: 10px;

        width: 130px;
        height: 40px;
        left: 20px;
        top: 20px;

        background: var(--grey-100);

        border: 2px solid var(--grey-100);
        border-radius: 8px;
        font-weight: 600;

        font-size: 1rem;
        line-height: 19px;

        color: var(--grey-300);

    }
    .BtnLightGreySmall:hover{

        background: var(--grey-300);
        border: 2px solid var(--grey-300);

        color: var(--grey-100)
    }
`;
