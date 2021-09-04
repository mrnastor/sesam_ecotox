import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Research from 'components/Research';

const ResearchPage: React.FC = () => (
  <Layout>
    <SEO title="Research" />
    <Research />
  </Layout>
);

export default ResearchPage;
