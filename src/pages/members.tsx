import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Members from 'components/Members';

const ResumePage: React.FC = () => (
  <Layout>
    <SEO title="Members" />
    <Members />
  </Layout>
);

export default ResumePage;
