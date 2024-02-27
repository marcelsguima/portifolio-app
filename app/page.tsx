"use client"
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/theme';
import GlobalStyle from '../styles/global';
import { PageContainer } from '../styles/PageStyles';
import { Header, Button } from '../styles/ComponentStyles';
import contentData from '../archive/content.json';
import { Content } from '../types/types';
import styled from 'styled-components';
import { BackgroundBeams, BackgroundBeamsDemo } from '@/components/ui/background-beams';

const SectionWrapper = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.primary};
`;

const SectionBody = styled.p`
  color: ${({ theme }) => theme.text};
`;

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
        <Header>Marcel Guimarães</Header>
        
        <BackgroundBeamsDemo />
        
        <Button onClick={toggleTheme}>Toggle Theme</Button>
         {Object.entries(content)
          .filter(([key]) => key !== 'about')
          .map(([key, { title, body }]) => (
            <SectionWrapper id={key} key={key}>
              <SectionTitle>{title}</SectionTitle>
              <SectionBody>{body}</SectionBody>
            </SectionWrapper>
          ))}
      </PageContainer>
    </ThemeProvider>
  );
}

export default Portfolio;
