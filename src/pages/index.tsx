import { useInterval } from 'ahooks';
import {PageProps} from "gatsby"
import React, { useEffect, useState } from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';

import Layout from '../components/layout';
import Seo from '../components/seo';
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
  list-style: none;
  line-height: 40px;
  position: relative;

  &:before {
    content: '🔸️';
    top: 50%;
    position: absolute;
    transform: translateY(-50%);
    left: -40px;
  }
`;

const IndexPage = ({ location }: PageProps) => {
  const [isWaveActivated, setWaveActivated] = useState(false);
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount((prev) => ++prev);
  }, count < 5 ? 100 : undefined);

  useEffect(() => {
    setWaveActivated((prev) => !prev);
  }, []);

  return (
    <Layout
      location={location}
      title={null}
    >
      <h1>
        <Flex>
          <span>
            Hey!
            {' '}
            {' '}
          </span>
          <IconAnimatedContainer animate={isWaveActivated}>
            <Flex marginLeft="16px">
              <span role="img" aria-label="wave emoji">
                👋
              </span>
            </Flex>
          </IconAnimatedContainer>
        </Flex>
      </h1>
      <BlockAnimatedContainer animate={count >= 1}>
        <Block>
          <p>
            My name is Protopopov Ruslan.
          </p>
          <p>
            I'm a React front-end developer with a lot of experience. I love building complex interfaces
            from simple, modular and tested components.
          </p>
          <p>
            I pay special attention to scaling and code maintenance.
          </p>
          <p>
            My main stack is React, Typescript, Redux Toolkit, Cypress, React Testing Library.
          </p>
        </Block>
      </BlockAnimatedContainer>
      <BlockAnimatedContainer animate={count >= 2}>
        <Block>
          <p>Here is a list of projects I have completed or been involved in:</p>
          <List>
            {projects.map((p) => (
              <ListItem key={p.name}>
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
          <p>Here is a list of my contacts:</p>
          <List>
            {contacts.map((p) => (
              <ListItem key={p.social}>
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
          Go to Blog
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
    </Layout>
  );
};

export default IndexPage;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Personal information" />;
