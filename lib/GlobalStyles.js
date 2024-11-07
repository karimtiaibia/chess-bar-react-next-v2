import { createGlobalStyle } from "styled-components";
import * as _var from "@/styles/variables";

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        background-color: ${_var.grayscale[50]};
    }

    a {
        color: ${_var.primary} ;
        text-decoration: none;
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    h1, h2, h3, h4, h5, h6, p {
        color: ${_var.grayscale[900]};
    }
`;
