import styled from 'styled-components';

export const Item = styled('li')`
  padding: 14px 24px;

  border-bottom: 1px solid ${({ theme }) => theme.border};
 
  &:last-child{
    border-bottom: none;
  }
`;