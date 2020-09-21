import styled from 'styled-components';

export const ExternalLink = styled('a')`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  
  color: ${({ theme }) => theme.text};
  text-decoration: none;
`;