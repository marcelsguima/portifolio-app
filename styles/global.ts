import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
`;

const Button = styled.button`
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

export default GlobalStyle;