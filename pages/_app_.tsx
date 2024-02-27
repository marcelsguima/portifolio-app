import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/theme';
import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }: { Component: React.ComponentType<any>, pageProps: any }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyle />
            <Component {...pageProps} toggleTheme={toggleTheme} />
        </ThemeProvider>
    );
}
