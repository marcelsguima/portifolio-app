import styled from 'styled-components';

export const Header = styled.h1`
  color: ${props => props.theme.primary};
`;

export const Button = styled.button`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.buttonText};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
