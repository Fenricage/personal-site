import { useInterval } from 'ahooks';
import {PageProps} from "gatsby"
import React, {useRef, useState} from 'react';
import { useTranslation } from "react-i18next"
import { Flex } from 'rebass';
import styled from 'styled-components';

import Index from '../components/layout';
import Seo from '../components/seo';
import {EastEgg} from "../features/easterEgg";
import {LanguageButton} from "../features/i18n/LanguageButton";
import { IconAnimatedContainer, BlockAnimatedContainer } from '../theme/components';
import LinkButton from '../ui-kit/LinkButton.js';


const projects = [
  {
    name: 'РЖД Витрина',
    link: 'https://mp.rzd.ru/',
  },
  {
    name: 'LETSGO (NFT Marketplace)',
    link: 'https://letsgo.finance/',
  },
  {
    name: 'C14 (Crypto Wallet)',
    link: 'https://c14.money',
  },
  {
    name: 'NiftyBridge (Crypto Wallet, NFT Marketplace)',
    link: 'https://wallet.niftybridge.io/',
  },
  {
    name: '0xmessage (Blockchain messenger)',
    link: 'https://0xmessage.com/',
  },
  {
    name: 'Securter (QR Code physical queue)',
    link: 'https://securter.com/',
  },
  {
    name: 'Cobrainer (Expertises Catalog)',
    link: 'https://www.cobrainer.com',
  },
  {
    name: 'Automation (Art Lebedev projects)',
    link: 'https://vaizr-develop.automatus.ru',
  },
  {
    name: 'Orby (Kid clothing store)',
    link: 'https://orby.ru',
  },
  {
    name: 'Benetton (Clothing  store)',
    link: 'https://ru.benetton.com',
  },
  {
    name: 'Sudar (Clothing store)',
    link: 'https://sudar.su/',
  },
];

const contacts = [
  {
    social: 'Telegram',
    link: 'https://t.me/fenricage',
  },
  {
    social: 'Linkedin',
    link: 'https://www.linkedin.com/in/ruslan-protopopov-73bb79232/',
  },
];

const List = styled.div`
  padding: 12px 50px;
`;

const Block = styled.section`
  margin-bottom: 40px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  line-height: 40px;
  position: relative;
`;

const BulletIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 16px;
`

const HelloIcon = styled.img`
    width: 40px;
    object-fit: contain;
`

const IndexPage = ({ location }: PageProps) => {
  const [count, setCount] = useState(0);

  const { t, i18n } = useTranslation()
  const headerRef = useRef<HTMLElement>()
  const easterEggRef = useRef<HTMLElement>()

  useInterval(() => {
    setCount((prev) => ++prev);
  }, count < 5 ? 100 : undefined);


  const calculateEasterEggY = () => {
    if(!headerRef?.current?.getBoundingClientRect()?.y || !headerRef?.current?.offsetHeight || !easterEggRef.current?.clientHeight) {
      return 0
    }

    return headerRef.current.getBoundingClientRect().y + headerRef.current.offsetHeight - easterEggRef.current.clientHeight
  }


  const easterEggY = calculateEasterEggY()


  if (!i18n.isInitialized) return null

  return (
    <Index
      location={location}
      languageButton={<LanguageButton/>}
      headerRef={headerRef}
    >
      <EastEgg y={easterEggY} wrapperRef={easterEggRef} />
      <h1>
        <Flex>
          <span>
            {t('index-intro')}
            {' '}
            {' '}
          </span>
          <IconAnimatedContainer animate={count >= 1}>
            <Flex marginLeft="16px">
              <HelloIcon src="hello.png" alt=""/>
            </Flex>
          </IconAnimatedContainer>
        </Flex>
      </h1>
      <BlockAnimatedContainer animate={count >= 1}>
        <Block>
          <p>
            {t('index-desc-1')}
          </p>
          <p>
            {t('index-desc-2')}
          </p>
          <p>
            {t('index-desc-3')}
          </p>
          <p>
            {t('index-desc-4')}
          </p>
        </Block>
      </BlockAnimatedContainer>
      <BlockAnimatedContainer animate={count >= 2}>
        <Block>
          <p>{t('index-list')}</p>
          <List>
            {projects.map((p) => (
              <ListItem key={p.name}>
                <BulletIcon src="orange-diamond.png"/>
                <a href={p.link} target="_blank" rel="noreferrer">
                  {p.name}
                </a>
              </ListItem>
            ))}
          </List>
        </Block>
      </BlockAnimatedContainer>
      <BlockAnimatedContainer animate={count >= 3}>
        <Block>
          <p>{t('index-contacts')}</p>
          <List>
            {contacts.map((p) => (
              <ListItem key={p.social}>
                <BulletIcon src="orange-diamond.png"/>
                <a href={p.link} target="_blank" rel="noreferrer">
                  {p.social}
                </a>
              </ListItem>
            ))}
          </List>
        </Block>
      </BlockAnimatedContainer>
      <BlockAnimatedContainer animate={count >= 4}>
        <LinkButton to="/blog">
          {t('go-to-blog')}
        </LinkButton>
      </BlockAnimatedContainer>
      <BlockAnimatedContainer animate={count >= 5}>
        <Block style={{ marginTop: '140px' }}>
          <a
            target="_blank"
            href="https://www.codewars.com/users/Fenricage"
            rel="noreferrer"
          >
            <img
              src="https://www.codewars.com/users/Fenricage/badges/small"
              alt="codewars badge small"
            />
          </a>
        </Block>
      </BlockAnimatedContainer>
    </Index>
  );
};

export default IndexPage;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Personal information" />;
