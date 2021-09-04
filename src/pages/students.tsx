import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Students from 'components/Students';

const ResumePage: React.FC = () => (
  <Layout>
    <SEO title="Students" />
    <Students />
  </Layout>
);

export default ResumePage;
