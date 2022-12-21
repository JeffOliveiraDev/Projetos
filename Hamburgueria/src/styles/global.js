import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`

    *{

        font-family: 'Inter', sans-serif;
        --heading-1-26: 1.625rem;
        --heading-2-22: 1.375rem;
        --heading-3-18: 1.125rem;
        --heading-4-14: 0.875rem;
       
        --headline-16: 1rem;
        --body-14: 0.875rem;
        --body-600-14: 0.875rem;
        --caption-12: 0.75rem;


    }

    *{

        --green-primary: #27AE60;
        --green-primary-50: #93D7AF;
        --red-secondary: #EB5757;

        --grey-100: #333333;
        --grey-50: #828282;
        --grey-20: #E0E0E0;
        --grey-0: #F5F5F5;
        
        --negative-red: #E60000;
        --warning-yellow: #FFCD07;
        --sucess-green: #168821;
        --information-blue: #155BCB;

    }


`;
