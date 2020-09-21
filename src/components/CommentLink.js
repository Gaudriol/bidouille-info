import styled from 'styled-components';

export const CommentLink = styled('a')`
  color: ${({ theme }) => theme.textSecondary};
  
  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: ${({ theme }) => theme.textSecondary};
  }
`;