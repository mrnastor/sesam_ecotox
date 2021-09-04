import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Publication from 'components/Publication';

const PublicationsPage: React.FC = () => (
  <Layout>
    <SEO title="Publications" />
    <Publication />
  </Layout>
);

export default PublicationsPage;
