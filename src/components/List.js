import React from 'react';
import styled from 'styled-components';

import { CommentLink, Description, ExternalLink, Host, Item, ArticleName } from './'

export const ListWrapper = styled('ul')`
  margin: 0 auto 20px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.backgroundSecondary};
`;

const LINK_REL = 'nofollow noreferrer noopener';

export const ListItem = () => {
  return (
    <Item>
      <ExternalLink href="https://medium.com/cold-brew-code" rel={LINK_REL} target="_blank">
        <ArticleName>
          We need physical audio kill switches <Host>(https://news.ycombinator.com/)</Host>
        </ArticleName>
      </ExternalLink>
      <Description>
        53 points par{' '}
        <CommentLink href="#" rel={LINK_REL} target="_blank">
          utilisateur
        </CommentLink>{' '}
          il y a 1 heure {'  |  '}
        <CommentLink href="#" rel={LINK_REL} target="_blank">
          53 commentaires
        </CommentLink>
      </Description>
    </Item>
  );
};

export const List = () => (
  <ListWrapper>
    <ListItem />
  </ListWrapper>
);



