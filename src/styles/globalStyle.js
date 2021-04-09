import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
    html{
        font-size: 62.5%;
    }

    body{
        margin:0;
        padding:0;
    }

    main {
        display: flex;
        flex-direction: column;
         min-height: 87.3vh;
    }

`;

export default globalStyle;
