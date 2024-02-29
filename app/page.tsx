"use client";
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/theme';
import GlobalStyle from '../styles/global';
import { PageContainer } from '../styles/PageStyles';
import { Header, Button } from '../styles/ComponentStyles';
import contentData from '../archive/content.json';
import { Content } from '../types/types';
import { About } from '@/components/about';

const Portfolio = () => {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    if (theme === lightTheme) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  const content: Content = contentData;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageContainer>
        <Header className="text-primary">Marcel Guimarães</Header>
        
       
        <About />
        
        
        <Button onClick={toggleTheme} className="bg-primary text-white">Toggle Theme</Button>
         {Object.entries(content)
          .filter(([key]) => key !== 'about')
          .map(([key, { title, body }]) => (
            <div id={key} key={key} className="mb-5 p-5 bg-background text-text">
              <h2 className="text-primary">{title}</h2>
              <p className="text-text">{body}</p>
            </div>
          ))}
      </PageContainer>
    </ThemeProvider>
  );
}

export default Portfolio;