import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import * as Styled from './styles';

import { ImageSharpFluid,  ImageSharpFixed} from 'helpers/definitions';

const Logo: React.FC = () => {
  const { site, placeholderImage, mobileImage, desktopImage } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      placeholderImage: file(relativePath: { eq: "sesam_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileImage: file(relativePath: { eq: "ecotox_logo.png" }) {
        childImageSharp {
          fixed(width: 180, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      desktopImage: file(relativePath: { eq: "ecotox_small.png" }) {
        childImageSharp {
          fixed(width: 80, height: 72) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const logoTitle: string = site.siteMetadata.title;
  const logoImage: ImageSharpFluid = placeholderImage.childImageSharp.fluid;
  const sources = [
    mobileImage.childImageSharp.fixed,
    {
      ...desktopImage.childImageSharp.fixed,
      media: `(min-width: 768px)`,
    },
  ]

  return (
    <Styled.Logo to="/">
      <Styled.Image>
        <Img fluid={logoImage} alt={logoTitle} />
      </Styled.Image>
      <Styled.SubImage>
        <Img fixed={sources} alt={logoTitle} />
      </Styled.SubImage>
    </Styled.Logo>
  );
};

export default Logo;
