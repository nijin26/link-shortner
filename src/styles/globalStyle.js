import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
    html{
        font-size: 62.5%;
    }

    body{
        margin:0;
        padding:0;
        font-family: 'Poppins', sans-serif;
    }

    main {
        display: flex;
        flex-direction: column;
         min-height: 87.3vh;
    }

`;

export default globalStyle;
