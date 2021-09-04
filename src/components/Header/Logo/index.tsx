import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import * as Styled from './styles';

import { ImageSharpFluid,  ImageSharpFixed} from 'helpers/definitions';

const Logo: React.FC = () => {
  const { site, placeholderImage, subPlaceholderImage } = useStaticQuery(graphql`
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
      subPlaceholderImage: file(relativePath: { eq: "ecotox_small.png" }) {
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
  const subLogoImage: ImageSharpFixed = subPlaceholderImage.childImageSharp.fixed;

  return (
    <Styled.Logo to="/">
      <Styled.Image>
        <Img fluid={logoImage} alt={logoTitle} />
      </Styled.Image>
      <Styled.SubImage>
        <Img fixed={subLogoImage} alt={logoTitle} />
      </Styled.SubImage>
    </Styled.Logo>
  );
};

export default Logo;
