import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import HeroBanner from 'components/HeroBanner';
import Activities from 'components/Activities';
import HeroCarousel from 'components/HeroCarousel';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="About Our Lab" />
      <HeroCarousel />
      <HeroBanner />
      <Activities />
      <hr />
      {/* <Testimonials /> */}
    </Layout>
  );
};

export default IndexPage;
