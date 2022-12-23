import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`

    *{

        font-family: 'Inter', sans-serif;
        --Heading1-26: 1rem;
        --Heading2-22: 1rem;
        --Heading3-18: 1rem;
        --Headline-16: 
        --Body-1x:
        --Body-600-14: 
        --Caption-12:
       
        --headline-12: 0.75rem;
        --HeadlineBold-12: 0.75rem;
        --HeadlineItalic: 0.75rem;  


    }

    *{
        /* Primary */

        --Color-primary: #27AE60;
        --Color-primary-50: #93D7AF;
        --Color-secondary:#EB5757;

        
        /* Grey Scale */

        --grey-0: #F5F5F5;
        --grey-50: #999999;
        --grey-100: #E0E0E0;
        --grey-300:#828282;
        --gray-600: #333333;

        /* Feedback */

        --Sucess: #168821;
        --Warning: #FFCD07;
        --Negative: #E60000;
        --Information: #155BCB;


    }


`;
