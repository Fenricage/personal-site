import { type PageProps } from 'gatsby';
import * as React from 'react';

import Seo from '@/shared/ui/seo';
import Layout from '@/widgets/layout';

const NotFoundPage = ({ location }: PageProps) => {
  return (
    <Layout location={location}>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export const Head = () => <Seo title="404: Not Found" />;

export default NotFoundPage;
