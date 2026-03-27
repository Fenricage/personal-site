import React from 'react';

import { BlockAnimatedContainer } from '../../theme/components';
import { Block, BulletIcon, List, ListItem } from './indexPageStyles';

export type BulletLinkSectionItem = {
  key: string;
  href: string;
  label: string;
};

type BulletLinkSectionProps = {
  animate: boolean;
  title: React.ReactNode;
  items: BulletLinkSectionItem[];
};

export const BulletLinkSection = ({
  animate,
  title,
  items,
}: BulletLinkSectionProps) => (
  <BlockAnimatedContainer animate={animate}>
    <Block>
      <p>{title}</p>
      <List>
        {items.map((item) => (
          <ListItem key={item.key}>
            <BulletIcon src="orange-diamond.png" />
            <a href={item.href} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          </ListItem>
        ))}
      </List>
    </Block>
  </BlockAnimatedContainer>
);
