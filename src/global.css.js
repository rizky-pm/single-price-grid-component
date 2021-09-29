import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    body {
        box-sizing: border-box;
        font-family: 'Karla', sans-serif;
        font-size: 1rem;
        color: ${(props) => props.theme.colors.cyan};
        background-color: ${(props) => props.theme.colors.lightGray};
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }
`;

export default GlobalStyles;
