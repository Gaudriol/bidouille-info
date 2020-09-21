import styled from 'styled-components';

export const Title = styled('h1')`
  margin-top: 24px;
  margin-bottom: 26px;
  
  color: ${({ theme }) => theme.textSecondary};
  font-size: 20px;
  font-weight: 300;
`;
