import React from 'react';

import { BlockAnimatedContainer } from '@/shared/lib/theme/components';

import { Block, BulletIcon, List, ListItem, BulletIconWrapper } from './index-page-styles';

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
            <BulletIconWrapper>
              <BulletIcon src="orange-diamond.png" />
            </BulletIconWrapper>
            <a href={item.href} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          </ListItem>
        ))}
      </List>
    </Block>
  </BlockAnimatedContainer>
);
