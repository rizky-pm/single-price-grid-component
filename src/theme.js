import React from 'react';
import { ThemeProvider } from 'styled-components';

export const theme = {
    colors: {
        cyan: 'hsl(179, 62%, 43%)',
        lighterCyan: 'hsl(179, 47%, 52%)',
        brightYellow: 'hsl(71, 73%, 54%)',
        lightGray: 'hsl(204, 43%, 93%)',
        grayishBlue: 'hsl(218, 22%, 67%)',
    },
    fontWeights: {
        regular: 400,
        bold: 700,
    },
    breakpoints: {
        portraitSmartphone: 'min-width: 480px',
        portraitTablets: 'min-width: 600px',
        landscapeTablets: 'min-width: 801px',
        laptops: 'min-width: 1025px',
        desktops: 'min-width: 1281px',
    },
};

const Theme = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
