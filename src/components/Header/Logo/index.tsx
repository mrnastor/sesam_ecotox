import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"

import * as Styled from './styles';

import { ImageSharpFluid,  ImageSharpFixed} from 'helpers/definitions';

const Logo: React.FC = () => {
  const queryRes = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      placeholderImage: file(relativePath: { eq: "sesam_logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 80
          )
        }
      }
      mobileImage: file(relativePath: { eq: "ecotox_logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 60
            quality: 80
          )
        }
      }
      desktopImage: file(relativePath: { eq: "ecotox_small.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 72
          )
        }
      }
    }
  `);

  const { site, placeholderImage } = queryRes
  const mobileImage = queryRes.mobileImage!
  const desktopImage = queryRes.desktopImage!


  const logoTitle: string = site.siteMetadata.title;
  const logoImage: ImageSharpFluid = placeholderImage.childImageSharp.gatsbyImageData;

  // @ts-ignore
  const sources = withArtDirection(getImage(desktopImage.childImageSharp.gatsbyImageData), [
    {
      media: "(max-width: 480px)",
      image: getImage(mobileImage.childImageSharp.gatsbyImageData),
    },
  ])

  return (
    <Styled.Logo to="/">
      <Styled.Image>
        <GatsbyImage image={logoImage} alt={logoTitle} />
      </Styled.Image>
      <Styled.SubImage>
        <GatsbyImage className="art-directed" image={sources} alt={logoTitle} />
      </Styled.SubImage>
    </Styled.Logo>
  );
};

export default Logo;
