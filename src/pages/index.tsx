import { useInterval } from 'ahooks';
import { PageProps } from 'gatsby';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Flex } from 'rebass';

import { EastEgg } from '@/features/easter-egg';
import { LanguageButton } from '@/features/i18n/LanguageButton';
import { indexPageContacts, indexPageProjects } from '@/shared/config/index-page-data';
import { BlockAnimatedContainer, IconAnimatedContainer } from '@/shared/lib/theme/components';
import LinkButton from '@/shared/ui/LinkButton';
import Seo from '@/shared/ui/seo';
import { BulletLinkSection } from '@/widgets/home/ui/BulletLinkSection';
import { Block, HelloIcon } from '@/widgets/home/ui/index-page-styles';
import Layout from '@/widgets/layout';

const IndexPage = ({ location }: PageProps) => {
  const [count, setCount] = useState(0);

  const { t, i18n } = useTranslation();
  const headerRef = useRef<HTMLElement>(null);
  const easterEggRef = useRef<HTMLElement>(null);

  useInterval(() => {
    setCount((prev) => ++prev);
  }, count < 5 ? 100 : undefined);

  const calculateEasterEggY = () => {
    if (
      !headerRef?.current?.getBoundingClientRect()?.y ||
      !headerRef?.current?.offsetHeight ||
      !easterEggRef.current?.clientHeight
    ) {
      return 0;
    }

    return (
      headerRef.current.getBoundingClientRect().y +
      headerRef.current.offsetHeight -
      easterEggRef.current.clientHeight
    );
  };

  const easterEggY = calculateEasterEggY();

  if (!i18n.isInitialized) return null;

  return (
    <Layout
      location={location}
      languageButton={<LanguageButton />}
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
              <HelloIcon src="hello.png" alt="" />
            </Flex>
          </IconAnimatedContainer>
        </Flex>
      </h1>
      <BlockAnimatedContainer animate={count >= 1}>
        <Block>
          <p>{t('index-desc-1')}</p>
          <p>{t('index-desc-2')}</p>
          <p>{t('index-desc-3')}</p>
          <p>{t('index-desc-4')}</p>
        </Block>
      </BlockAnimatedContainer>
      <BulletLinkSection
        animate={count >= 2}
        title={t('index-list')}
        items={indexPageProjects.map((p) => ({
          key: p.name,
          href: p.link,
          label: p.name,
        }))}
      />
      <BulletLinkSection
        animate={count >= 3}
        title={t('index-contacts')}
        items={indexPageContacts.map((p) => ({
          key: p.social,
          href: p.link,
          label: p.social,
        }))}
      />
      <BlockAnimatedContainer animate={count >= 4}>
        <LinkButton to="/blog">{t('go-to-blog')}</LinkButton>
      </BlockAnimatedContainer>
      <BlockAnimatedContainer animate={count >= 5}>
        <Block style={{ marginTop: '140px' }}>
          <a
            target="_blank"
            href="https://www.codewars.com/users/Fenricage"
            rel="noreferrer"
          >
            <img
              src="https://www.codewars.com/users/Fenricage/badges/large"
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
