import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import HeroBanner from 'components/HeroBanner';
import Services from 'components/Services';
import HeroCarousel from 'components/HeroCarousel';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="About Our Lab" />
      <HeroCarousel />
      <HeroBanner />
      {/* <Services /> */}
      <hr />
      {/* <Testimonials /> */}
    </Layout>
  );
};

export default IndexPage;
