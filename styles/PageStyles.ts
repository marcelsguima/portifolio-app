import styled from 'styled-components';

export const PageContainer = styled.div`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  min-height: 100vh;
  padding: 20px;
`;
