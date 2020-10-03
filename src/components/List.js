import React from "react";
import styled from "styled-components";

import {
  CommentLink,
  Description,
  ExternalLink,
  Host,
  Item,
  ArticleName,
} from "./";

export const ListWrapper = styled("ul")`
  margin: 0 auto 20px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.backgroundSecondary};
`;

const LINK_REL = "nofollow noreferrer noopener";

export const ListItem = ({
  by,
  kids = [],
  score,
  time,
  title,
  url,
  type,
  id,
}) => {
  const hours = new Date(time * 1000).getHours();
  const now = new Date();
  return (
    <Item>
      <ExternalLink href={url} rel={LINK_REL} target="_blank">
        <ArticleName>
          {title} <Host>({url})</Host>
        </ArticleName>
      </ExternalLink>
      <Description>
        {score} points par{" "}
        <CommentLink href="#" rel={LINK_REL} target="_blank">
          {by}
        </CommentLink>{" "}
        il y a 1 heure {"  |  "}
        <CommentLink href="#" rel={LINK_REL} target="_blank">
          53 commentaires
        </CommentLink>
      </Description>
    </Item>
  );
};

export const List = ({ stories }) => {
  if (!stories.length) {
    return "chargement...";
  }

  return (
    <ListWrapper>
      {stories.map(story => (
        <ListItem key={story.id} {...story} />
      ))}
    </ListWrapper>
  );
};
