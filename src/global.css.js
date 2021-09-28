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
        display: grid;
        place-items: center;
    }
`;

export default GlobalStyles;
