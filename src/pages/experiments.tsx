import { Link, graphql } from 'gatsby';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageButton } from '@/features/i18n/LanguageButton';
import Seo from '@/shared/ui/seo';
import Layout from '@/widgets/layout';


const ExperimentsPage = () => {

  const { t, i18n } = useTranslation();


  if (!i18n.isInitialized) return null;

  return (
    <Layout
      location={location}
      languageButton={<LanguageButton />}
      header={
        <Link className="header-link-home" to="/">
          {t('back-to-home')}
        </Link>
      }
    >
      experiments
    </Layout>
  );
};

export default ExperimentsPage;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Experiments" description="Experiments" />;

