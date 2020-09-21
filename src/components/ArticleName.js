import styled from 'styled-components';

export const ArticleName = styled('h3')`
  margin-top: 0;
  margin-bottom: 6px;

  color: ${({ theme }) => theme.text};
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.4px;
`;